import { AxiosError } from "axios";

interface ApiError extends AxiosError {
  response?: {
    message: string;
    customCode: number;
  };
}
