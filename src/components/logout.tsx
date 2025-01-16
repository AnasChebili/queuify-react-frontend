import { useNavigate } from "@tanstack/react-router";
import { Button } from "./ui/button";

export const LogOut = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate({ to: "/auth" });
  };
  return (
    <Button onClick={logOut} variant={"destructive"}>
      Log Out
    </Button>
  );
};
