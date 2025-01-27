import { JobsContainer } from "@/components/jobs-container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/queues/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="flex items-center justify-center h-svh">
      <JobsContainer></JobsContainer>
    </section>
  );
}
