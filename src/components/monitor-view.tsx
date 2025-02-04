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
    <Card className="w-full h-[350px] flex flex-col">
      <CardHeader>
        <CardTitle>Job Monitor</CardTitle>
        <CardDescription>View and track scheduled tasks</CardDescription>
      </CardHeader>
      <CardContent className="">
        <ScrollArea className="h-[200px]">
          {data?.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <CardTitle>{taskConfigs[job.taskType]}</CardTitle>
                <CardDescription>Status: {job.status}</CardDescription>
              </CardHeader>
              <CardContent>
                Scheduled For:{" "}
                <span className="text-sm text-gray-500">
                  {new Date(job.scheduledFor).toLocaleString()}
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
