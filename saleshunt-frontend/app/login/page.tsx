export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-slate-900 rounded-3xl p-8">

        <p className="text-blue-400 text-sm uppercase mb-3">
          Welcome Back
        </p>

        <h1 className="text-4xl font-bold mb-3">
          Login to SalesHunt
        </h1>

        <p className="text-slate-400 mb-8">
          Access candidates, jobs and recruiter tools.
        </p>

        <div className="grid gap-5">

          <input
            className="bg-slate-800 p-5 rounded-2xl"
            placeholder="Email Address"
          />

          <input
            type="password"
            className="bg-slate-800 p-5 rounded-2xl"
            placeholder="Password"
          />

          <button className="bg-blue-600 p-5 rounded-2xl">
            Login →
          </button>

        </div>

      </div>

    </main>
  );
}