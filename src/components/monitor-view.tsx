import { useGetScheduledJobs } from "@/hooks/use-jobs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const taskConfigs = {
  "database-backup": "Database Backup",
  "report-generation": "Report Generation",
  "data-cleanup": "Data Cleanup",
};

export const MonitorView = () => {
  const { data } = useGetScheduledJobs();
  return (
    <Card className="w-full h-[250px] flex flex-col">
      <CardHeader>
        <CardTitle>Job Monitor</CardTitle>
        <CardDescription>View and track scheduled tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[150px] ">
          {data?.map((job) => (
            <Card key={job.id} className="mb-2">
              <CardHeader className="-mt-3">
                <CardTitle>{taskConfigs[job.taskType]}</CardTitle>
                <CardDescription>Status: {job.status}</CardDescription>
              </CardHeader>
              <CardContent className="-mt-5 -mb-3">
                Scheduled For:{" "}
                <span className="text-sm text-gray-500">
                  {job.scheduledFor === "immediate"
                    ? "immediate"
                    : new Date(job.scheduledFor).toLocaleString()}
                </span>
              </CardContent>
            </Card>
          ))}
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
