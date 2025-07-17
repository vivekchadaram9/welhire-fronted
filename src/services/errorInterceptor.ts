import type { AxiosInstance, AxiosError } from 'axios';
import { toast } from 'sonner';

export function registerErrorInterceptor(inst: AxiosInstance) {
  inst.interceptors.response.use(
    resp => resp,
    (error: AxiosError) => {
      // don’t toast on your refresh‑token call
      const url = error.config?.url ?? '';
      if (url.includes('/refreshToken')) {
        return Promise.reject(error);
      }

      const status = error.response?.status;
      const data   = (error.response?.data as any) || {};

      switch (status) {
        case 400:
          // InvalidQuestionSettingsException or InvalidQuestionException
          toast.error(data.message ?? 'Bad request. Please check your input.');
          break;
        case 404:
          // ResourceNotFoundException
          toast.error(data.message ?? 'Resource not found.');
          break;
        case 409:
          // ResourceAlreadyExistsException
          const msgs = Array.isArray(data.errors)
            ? data.errors.join(' • ')
            : data.message ?? 'Conflict occurred.';
          toast.error(msgs);
          break;
        case 500:
          // fallback for any unhandled server error
          toast.error(
            data.message
              ? `Server error: ${data.message}`
              : 'An unexpected error occurred on the server.'
          );
          break;
        default:
          // everything else
          toast.error('Something went wrong. Please try again.');
      }

      return Promise.reject(error);
    }
  );
}
