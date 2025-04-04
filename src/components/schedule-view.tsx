import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
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
import { DatePickerDemo } from "./date-picker";

const taskConfigs = {
  "database-backup": "Database Backup",
  "report-generation": "Report Generation",
  "data-cleanup": "Data Cleanup",
};

export const ScheduleView = () => {
  const [jobType, setJobType] = useState<
    "database-backup" | "report-generation" | "data-cleanup"
  >();
  const [jobDelay, setJobDelay] = useState("");
  const scheduleJobMutation = useScheduleJob({ onSuccess: () => {} });
  const scheduleRecurringMutation = useScheduleRecurringJob({
    onSuccess: () => {},
  });
  return (
    <Card className="w-full h-[250px] ">
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
          <section className="flex justify-center gap-4">
            <div className="flex flex-col gap-2 basis-1/2">
              <label htmlFor="type">Job Type</label>
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
                  className="w-full text-gray-500 transition border-gray-500 hover:text-black"
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
              <label htmlFor="time">Schedule For (seconds from now)</label>
              {/* <Input
                value={jobDelay}
                onChange={(e) => setJobDelay(e.target.value)}
                className="w-full"
                type="number"
                placeholder="Leave empty for immediate execution"
                id="time"
              /> */}
              <DatePickerDemo
                date={undefined}
                setDate={(date: Date | undefined) =>
                  setJobDelay(date ? String(date?.getTime()) : "0")
                }
                className="w-full"
              />
            </div>
          </section>
          <CardFooter className="flex justify-center gap-3 pt-4">
            <Button
              disabled={!jobType}
              onClick={() =>
                scheduleJobMutation.mutate({
                  taskType: jobType as
                    | "database-backup"
                    | "report-generation"
                    | "data-cleanup",
                  scheduledFor: Number(jobDelay),
                })
              }
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
            >
              Schedule Recurring
            </Button>
          </CardFooter>
        </CardContent>
      </form>
    </Card>
  );
};
