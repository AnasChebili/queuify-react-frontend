import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/queues/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/queues/"!</div>
}
