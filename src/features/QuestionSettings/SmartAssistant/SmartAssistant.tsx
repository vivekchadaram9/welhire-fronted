import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { toast } from "sonner";
import axios from "axios";

import { fetchJdSkills, saveSmartSettings } from "../services/interviewService";
import type { JdSkills } from "../../../types/interview/interview.type";
import { LEVEL_VALUE_MAP, type Level } from "../../../utils/constants";
import HardSkillsSelector from "../components/HardSkillsSelector";
import SoftSkillsSelector from "../components/SoftSkillsSelector";
import BehavioralCompetenciesSelector from "../components/BehavioralCompetenciesSelector";
import { Icons } from "../../../assets/icons";
import SectionWrapper from "../../../components/SectionWrapper";
import ActionButtons from "../components/ActionButtons";

export default function SmartAssistant() {
  const { jdRefId } = useParams<{ jdRefId: string }>();
  const navigate = useNavigate();

  const [skills, setSkills] = useState<JdSkills | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // levels
  const [techLevels, setTechLevels] = useState<Record<string, Level>>({});
  const [softLevels, setSoftLevels] = useState<Record<string, Level>>({});

  // selection sets
  const [selectedTech, setSelectedTech] = useState<Set<string>>(new Set());
  const [selectedSoft, setSelectedSoft] = useState<Set<string>>(new Set());
  const [behaviors, setBehaviors] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!jdRefId) return;
    setLoading(true);

    fetchJdSkills(jdRefId)
      .then((r) => {
        const data = r.data;
        setSkills(data);

        // init levels
        const tLv: Record<string, Level> = {};
        const sLv: Record<string, Level> = {};
        data.hardSkills.forEach((s) => (tLv[s.skillName] = "" as any));
        data.softSkills.forEach((s) => (sLv[s.skillName] = "" as any));
        setTechLevels(tLv);
        setSoftLevels(sLv);
      })
      .catch((err) => {
        console.error(err);
        setError(
          axios.isAxiosError(err) && err.response?.data?.message
            ? err.response.data.message
            : "Unable to load interview data."
        );
      })
      .finally(() => setLoading(false));
  }, [jdRefId]);

  const toggleBehavior = (name: string) =>
    setBehaviors((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });

  const toggleTech = (name: string) =>
    setSelectedTech((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });

  const toggleSoft = (name: string) =>
    setSelectedSoft((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });

  const handleGenerate = async () => {
    if (!jdRefId || !skills) return;
    setSaving(true);

    const payload = {
      technicalSkills: skills.hardSkills
        .filter((s) => selectedTech.has(s.skillName))
        .map((s) => ({
          skillName: s.skillName,
          skillLevel: LEVEL_VALUE_MAP[techLevels[s.skillName]],
          skillLevelMax: s.skillLevelMax,
          experienceYears: s.experienceYears,
        })),
      softSkills: skills.softSkills
        .filter((s) => selectedSoft.has(s.skillName))
        .map((s) => ({
          skillName: s.skillName,
          skillLevel: LEVEL_VALUE_MAP[softLevels[s.skillName]],
          skillLevelMax: s.skillLevelMax,
          experienceYears: s.experienceYears,
        })),
      behavioralCompetencies: Array.from(behaviors),
    };

    try {
      await saveSmartSettings(jdRefId, payload);
      console.log(payload);
      toast.success("Interview generated successfully!");
    } catch {
      /* global interceptor toasts the error */
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <Box textAlign="center" pt={10}>
        <CircularProgress />
      </Box>
    );
  if (error) return <Typography color="error">{error}</Typography>;
  if (!skills) return null;

  return (
    <Box p={2}>
      <Box textAlign="left" mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Smart Assistant
        </Typography>
        <Typography color="text.secondary">
          Select your preferences to guide AI generation
        </Typography>
      </Box>
      <SectionWrapper>
        <Box   alignItems="center"  p={1}> 
        <Typography variant="h6" fontWeight="bold" display={'flex'} >
          <Icons.hiringIcon height={30} width={30} style={{marginRight:'5px'}}/>
          Step 1: Select Preferences
        </Typography>
        <Typography  fontWeight="bold"  color="text.secondary"  display={'flex'} pt={2} pl={4} pb={2} >
           <Icons.listIcon height={30} width={30}  style={{marginRight:'5px'}}/>
          Categories
        </Typography>

        </Box>

        <Box display="flex" gap={2} flexWrap="wrap"  >
          <HardSkillsSelector
            items={skills.hardSkills}
            levels={techLevels}
            selected={selectedTech}
            onToggle={toggleTech}
            onLevelChange={(name, lvl) =>
              setTechLevels((prev) => ({ ...prev, [name]: lvl }))
            }
          />

          <SoftSkillsSelector
            items={skills.softSkills}
            levels={softLevels}
            selected={selectedSoft}
            onToggle={toggleSoft}
            onLevelChange={(name, lvl) =>
              setSoftLevels((prev) => ({ ...prev, [name]: lvl }))
            }
          />

          <BehavioralCompetenciesSelector
            items={skills.behavioralCompetencies}
            selected={behaviors}
            onToggle={toggleBehavior}
          />
        </Box>

         </SectionWrapper>
   
           <ActionButtons
              onBack={() => navigate(-1)}
              onNext={handleGenerate}
              nextLabel="Generate Interview"
              nextLoading={saving}
            />
            </Box>
  );
}
