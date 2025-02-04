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

const taskConfigs = {
  "database-backup": "Database Backup",
  "report-generation": "Report Generation",
  "data-cleanup": "Data Cleanup",
};

export const ScheduleView = () => {
  return (
    <Card className="w-full h-[350px]">
      <CardHeader>
        <CardTitle>Schedule New Job</CardTitle>
        <CardDescription>
          Create one-time or recurring long jobs
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="type">Job Type</label>
          <Select>
            <SelectTrigger id="type" className="w-full">
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
        <div className="flex flex-col gap-2">
          <label htmlFor="time">Schedule For (seconds from now)</label>
          <Input
            className="w-full"
            type="number"
            placeholder="Leave empty for immediate execution"
            id="time"
          />
        </div>
        <CardFooter className="flex justify-center gap-3 pt-4">
          <Button>Schedule Once</Button>
          <Button>Schedule Recurring</Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
