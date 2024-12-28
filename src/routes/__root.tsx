import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

const queryClient = new QueryClient();

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Fragment>
        <div>Hello "__root"!</div>
        <Outlet />
        <TanStackRouterDevTools />
        <ReactQueryDevtools initialIsOpen={false} />
      </React.Fragment>
    </QueryClientProvider>
  );
}

const TanStackRouterDevTools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );
