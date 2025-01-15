import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center w-svw h-svh">
      <section className="flex flex-col justify-center items-center gap-12 h-[600px] w-[500px] rounded-2xl text-black bg-white">
        <header className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-bold">Hi There!</h1>
          <p className="text-sm ">Welcome to Queuify</p>
          <section className="flex text-xs">
            <button className="p-3 border-b-2 border-blue-500">Log in</button>
            <button className="p-3 border-b-2">Sign up</button>
          </section>
        </header>

        <section className="flex flex-col items-center justify-center gap-7">
          <button className="flex items-center justify-center w-[300px] border-2 border-gray-400 h-[40px] rounded-lg">
            <img src="src/assets/google.svg" alt="" className="w-6 h-6" />
          </button>

          <div className="bg-gray-300 w-[400px] h-[1px]"></div>

          <form action="" className="flex flex-col gap-4 text-sm">
            <input
              type="email"
              className="border-gray-400 border-2 rounded-lg p-2 h-[40px] w-[300px]"
              placeholder="email"
            />
            <input
              type="password"
              className="border-gray-400 border-2 rounded-lg p-2 h-[40px] w-[300px]"
              placeholder="password"
            />

            <button className=" mt-8 flex items-center justify-center w-[300px] h-[45px] rounded-full bg-black text-white">
              Log In
            </button>
          </form>
        </section>
      </section>
    </div>
  );
}
