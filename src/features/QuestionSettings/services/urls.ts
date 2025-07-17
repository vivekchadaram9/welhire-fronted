
export const API_URLS = {
//   QUICK_SETTINGS_BASE: '/api/v1/quick-settings',
  quickSettings: (jdRefId: string) => `/api/v1/quick-settings/${jdRefId}`,
  smartSettings: (jdRefId: string) => `/api/v1/smart-settings/${jdRefId}`,
  jdSkills:      (jdRefId: string) => `/jd-skills/${jdRefId}`,
} as const;
