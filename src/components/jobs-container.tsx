import { useState } from "react";
import { Button } from "./ui/button";
import { MonitorView } from "./monitor-view";
import { ScheduleView } from "./schedule-view";

export const JobsContainer = () => {
  const [isMonitorView, setIsMonitorView] = useState(true);
  return (
    <section className="w-[500px] p-5 flex flex-col gap-3">
      <section className="flex w-full bg-gray-500 rounded-lg">
        <Button className="basis-1/2" onClick={() => setIsMonitorView(false)}>
          Schedule Jobs
        </Button>
        <Button className="basis-1/2" onClick={() => setIsMonitorView(true)}>
          Monitor Jobs
        </Button>
      </section>
      {isMonitorView ? <MonitorView /> : <ScheduleView />}
    </section>
  );
};
