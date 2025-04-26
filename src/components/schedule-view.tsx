import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useScheduleJob, useScheduleRecurringJob } from "@/hooks/use-jobs";
import { useState } from "react";
import { DateTimePicker } from "./date-time-picker";

const taskConfigs = {
  "database-backup": "Database Backup",
  "report-generation": "Report Generation",
  "data-cleanup": "Data Cleanup",
};

export const ScheduleView = () => {
  const [jobType, setJobType] = useState<
    "database-backup" | "report-generation" | "data-cleanup"
  >();
  const [jobDelay, setJobDelay] = useState<number | undefined>(undefined);
  const scheduleJobMutation = useScheduleJob({ onSuccess: () => {} });
  const scheduleRecurringMutation = useScheduleRecurringJob({
    onSuccess: () => {},
  });
  return (
    <Card className="w-full min-h-[250px] ">
      <CardHeader>
        <CardTitle>Schedule New Job</CardTitle>
        <CardDescription>
          Create One-time or recurring long jobs
        </CardDescription>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setJobType(undefined);
        }}
      >
        <CardContent className="flex flex-col gap-3">
          <section className="flex flex-col justify-center gap-4 sm:flex-row">
            <div className="flex flex-col gap-2 basis-1/2">
              <label htmlFor="type">Job Type</label>
              <p className="text-sm text-muted-foreground">
                Automatically run long Jobs
              </p>
              <Select
                required
                value={jobType ?? ""}
                onValueChange={(value) =>
                  setJobType(
                    value as
                      | "database-backup"
                      | "report-generation"
                      | "data-cleanup"
                  )
                }
              >
                <SelectTrigger
                  id="type"
                  className="w-full text-gray-500 transition hover:bg-accent hover:text-accent-foreground"
                >
                  <SelectValue placeholder="Select a job type" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(taskConfigs).map((select) => (
                    <SelectItem key={select[0]} value={select[0]}>
                      {select[1]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 basis-1/2">
              <label htmlFor="time">Schedule For</label>
              <p className="text-sm text-muted-foreground">
                Available only for one-time jobs
              </p>
              {/* <Input
                value={jobDelay}
                onChange={(e) => setJobDelay(e.target.value)}
                className="w-full"
                type="number"
                placeholder="Leave empty for immediate execution"
                id="time"
              /> */}
              <DateTimePicker
                date={
                  jobDelay != undefined ? new Date(Number(jobDelay)) : jobDelay
                }
                setDate={(date: Date | undefined) =>
                  setJobDelay(date ? date?.getTime() : 0)
                }
              />
            </div>
          </section>
          <CardFooter className="flex flex-col justify-center gap-3 pt-4 sm:flex-row">
            <Button
              disabled={!jobType}
              onClick={() =>
                scheduleJobMutation.mutate({
                  taskType: jobType as
                    | "database-backup"
                    | "report-generation"
                    | "data-cleanup",
                  scheduledFor: jobDelay,
                })
              }
              className="w-[200px]"
              size={"lg"}
            >
              Schedule Once
            </Button>
            <Button
              disabled={!jobType}
              onClick={() =>
                scheduleRecurringMutation.mutate({
                  taskType: jobType as
                    | "database-backup"
                    | "report-generation"
                    | "data-cleanup",
                })
              }
              className="w-[200px] "
              size={"lg"}
            >
              Schedule Recurring
            </Button>
          </CardFooter>
        </CardContent>
      </form>
    </Card>
  );
};
