import { AuthApiService } from "@/api/api-service/auth/auth-api-service";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

export const useGoogleLogIn = () => {
  return useMutation({
    mutationFn: AuthApiService.googleLogIn,
    onSettled: (data) => console.log(data),
  });
};

export const useLogIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: AuthApiService.logIn,
    onSuccess: (data) => {
      localStorage.setItem("token", data);
      navigate({ to: "/" });
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: AuthApiService.register,
    onSuccess: (data) => {
      localStorage.setItem("token", data);
      navigate({ to: "/" });
    },
  });
};
