import { AuthApiService } from "@/api/api-service/auth/auth-api-service";
import { useMutation } from "@tanstack/react-query";

export const useGoogleLogIn = () => {
  return useMutation({
    mutationFn: AuthApiService.googleLogIn,
    onSettled: (data) => console.log(data),
  });
};

export const useLogIn = () => {
  return useMutation({
    mutationFn: AuthApiService.logIn,
    onSettled: (data) => console.log(data),
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: AuthApiService.register,
    onSuccess: (data) => console.log(data),
  });
};
