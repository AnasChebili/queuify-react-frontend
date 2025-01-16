import { AuthApiService } from "@/api/api-service/auth/auth-api-service";
import { useMutation } from "@tanstack/react-query";

export const useGoogleLogIn = () => {
  return useMutation({
    mutationFn: AuthApiService.googleLogIn,
    onSettled: (data) => console.log(data),
  });
};
