import axios, {
  type AxiosInstance,
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios';
import { getTokens, storeTokens, clearTokens } from '../utils/authUtils';
import { BASE_URL, INTERVIEW_SERVICE_URL, JD_SERVICE_URL } from '../services/api-constants';
import { registerErrorInterceptor } from './errorInterceptor';

function makeInstance(baseURL: string): AxiosInstance {
  const inst = axios.create({
    baseURL,
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  });

  //  inject bearer token
  inst.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const tokenObj = getTokens();
      if (tokenObj?.authToken) {
        // ensure headers object exists
        config.headers = config.headers || {};
        // attach the bearer token
        (config.headers as Record<string, string>)['Authorization'] =
          `Bearer ${tokenObj.authToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // auto‑refresh on 401
  inst.interceptors.response.use(
    (resp: AxiosResponse) => resp,
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        const tokens = getTokens();
        if (tokens?.refreshToken) {
          try {
            const refreshResp = await inst.post('/app/refreshToken', {
              refreshToken: tokens.refreshToken,
            });
            const newAuth = (refreshResp.data as any).result?.authToken;
            const newRT   = (refreshResp.data as any).result?.refreshToken;
            if (newAuth && newRT) {
              storeTokens(newAuth, newRT);
              // retry original request with new token
              const orig = error.config as InternalAxiosRequestConfig;
              orig.headers = orig.headers || {};
              (orig.headers as Record<string, string>)['Authorization'] =
                `Bearer ${newAuth}`;
              return inst.request(orig);
            }
          } catch {
            clearTokens();
          }
        }
      }
      return Promise.reject(error);
    }
  );


  registerErrorInterceptor(inst);

  return inst;
}

// preconfigured instances:
export const authService      = makeInstance(BASE_URL);
export const interviewService = makeInstance(INTERVIEW_SERVICE_URL);
export const jdService        = makeInstance(JD_SERVICE_URL);
