import { useState } from "react";
import { Button } from "./ui/button";

export const JobsContainer = () => {
  const [isMonitorView, setIsMonitorView] = useState(false);
  return (
    <section className="w-[500px] p-5">
      <section className="w-full bg-gray-500 rounded-lg">
        <Button>Schedule Jobs</Button>
        <Button>Monitor Jobs</Button>
      </section>
    </section>
  );
};
