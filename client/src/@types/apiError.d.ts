import { AxiosError } from "axios";

interface ApiError extends AxiosError {
  response?: {
    data?: {
      message?: string;
      error?: string;
      statusCode?: number;
    };
  };
}
