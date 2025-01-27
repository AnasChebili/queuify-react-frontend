import { useGetScheduledJobs } from "@/hooks/use-jobs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const taskConfigs = {
  "database-backup": "Database Backup",
  "report-generation": "Report Generation",
  "data-cleanup": "Data Cleanup",
};

export const MonitorView = () => {
  const { data } = useGetScheduledJobs();
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Job Monitor</CardTitle>
        <CardDescription>View and track scheduled tasks</CardDescription>
      </CardHeader>
      <CardContent>
        {data?.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle>{taskConfigs[job.taskType]}</CardTitle>
              <CardDescription>{job.status}</CardDescription>
            </CardHeader>
            <CardContent>
              Scheduled For: {job.scheduledFor.toString()}
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};
