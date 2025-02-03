import { MonitorView } from "./monitor-view";
import { ScheduleView } from "./schedule-view";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
export const JobsContainer = () => {
  return (
    <section className="w-[500px] p-5 flex flex-col gap-3">
      <Tabs defaultValue="schedule">
        <TabsList className="w-full">
          <TabsTrigger className="basis-1/2" value="schedule">
            Schedule Jobs
          </TabsTrigger>
          <TabsTrigger className="basis-1/2" value="monitor">
            Monitor Jobs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="schedule">
          <ScheduleView />
        </TabsContent>
        <TabsContent value="monitor">
          <MonitorView />
        </TabsContent>
      </Tabs>
    </section>
  );
};
