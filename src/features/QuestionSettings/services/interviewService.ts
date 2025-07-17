import { interviewService, jdService } from "../../../services/axiosMultiInstance";
import type { ApiResponse, JdSkills, QuickQuestionSettings, SavedQuestionSettings, SmartSettingsPayload } from "../../../types/interview/interview.type";
import { API_URLS } from "./urls";

export function fetchQuickSettings(jdRefId: string) {
  return interviewService.get<ApiResponse<QuickQuestionSettings>>(API_URLS.quickSettings(jdRefId));
}
export function saveQuickSettings(jdRefId: string) {
  return interviewService.post<SavedQuestionSettings>(API_URLS.quickSettings(jdRefId));
}
export function saveSmartSettings(jdRefId: string,payload:SmartSettingsPayload) {
  return interviewService.post<SavedQuestionSettings>(API_URLS.smartSettings(jdRefId),payload);
}

export function fetchJdSkills(jdRefId: string) {
  return jdService.get<JdSkills>(API_URLS.jdSkills(jdRefId));
}