import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
 import { ApiMethods } from '../utils/authUtils';
 
export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  /** HTTP method to use */
  method:  keyof typeof ApiMethods;
}

/**
 * Simplified wrapper if you need custom options before firing.
 * Most use cases can call the instance directly via .get/.post.
 */
export async function ApiRequest<T = any>(
  instance: AxiosInstance,
  options: CustomAxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return instance.request<T>(options);
}