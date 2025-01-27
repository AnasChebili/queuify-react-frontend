import { JobsApiService } from "@/api/api-service/jobs/jobs-api-service";
import { useMutation } from "@tanstack/react-query";

export const useScheduleJob = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: JobsApiService.scheduleJob,
    onSuccess: onSuccess,
  });
};
