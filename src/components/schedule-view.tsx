import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Select } from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "react-day-picker";

const taskConfigs = {
  "database-backup": "Database Backup",
  "report-generation": "Report Generation",
  "data-cleanup": "Data Cleanup",
};

export const ScheduleView = () => {
  return (
    <section className="w-full">
      <header>
        <h1>Schedule New Job</h1>
        <p>Create one-time or recurring long jobs</p>
      </header>
      <label>Job Type</label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a job type" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(taskConfigs).map((select) => (
            <SelectItem key={select[0]} value="">
              {select[1]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <label>Schedule For (seconds from now)</label>
      <Input
        className="w-full"
        type="number"
        placeholder="Leave empty for immediate execution"
      />
      <section className="flex gap-3">
        <Button>Schedule Once</Button>
        <Button>Schedule Recurring</Button>
      </section>
    </section>
  );
};
