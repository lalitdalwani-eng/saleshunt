export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-lg bg-slate-900 rounded-3xl p-8">

        <p className="text-blue-400 text-sm uppercase mb-3">
          Join SalesHunt
        </p>

        <h1 className="text-4xl font-bold mb-3">
          Create Account
        </h1>

        <div className="grid gap-5 mt-8">

          <input
            className="bg-slate-800 p-5 rounded-2xl"
            placeholder="Full Name"
          />

          <input
            className="bg-slate-800 p-5 rounded-2xl"
            placeholder="Email"
          />

          <input
            type="password"
            className="bg-slate-800 p-5 rounded-2xl"
            placeholder="Password"
          />

          <select className="bg-slate-800 p-5 rounded-2xl">

            <option>
              Candidate
            </option>

            <option>
              Recruiter
            </option>

          </select>

          <button className="bg-blue-600 p-5 rounded-2xl">
            Create Account →
          </button>

        </div>

      </div>

    </main>
  );
}