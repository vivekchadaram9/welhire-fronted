export interface QuickQuestionSettings {
  totalQuestions: number;
  duration: number;
  noOfTechSkillQuestions: number;
  noOfSoftSkillQuestions: number;
  noOfBehavioralQuestions: number;
  noOfCategories: number;
  defaultQuestions: InterviewQuestion[];
}

export interface SavedQuestionSettings {
  id :string;
  jdRefId:string;
  noOfQuestions: number;
  noOfSoftSkillQuestions: number;
  noOfTechnicalSkillQuestions: number;
  noOfBehavioralQuestions: number;
  noOfDefaultQuestions: number;
  mode:string;
  technicalSkills: SkillEntry[];
  softSkills: SkillEntry[];
  behavioralCompetencies: string[];
  noOfJdQuestionsInBucket:number;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
  success: boolean;
}

export interface SkillEntry {
  skillName: string;
  skillLevel: number;
  skillLevelMax: number;
  experienceYears: number;
}

export interface JdSkills {
  hardSkills: SkillEntry[];
  softSkills: SkillEntry[];
  behavioralCompetencies: string[];
}

 

export interface SmartSettingsPayload {
  technicalSkills: SkillEntry[];
  softSkills: SkillEntry[];
  behavioralCompetencies: string[];
}

export interface QuestionSettingsCounts {
    noOfSoftSkillQuestions: number,
    noOfTechnicalSkillQuestions: number,
    noOfBehavioralQuestions: number
}

export interface InterviewQuestion{
  id: string;
  text: string;
  category: string | null;
  skill: string;
  difficulty: string | null;
  type: string;
  timeMins: number;
}