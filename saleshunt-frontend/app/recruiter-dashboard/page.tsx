export default function RecruiterDashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <p className="text-blue-400 uppercase text-sm mb-3">
              Recruiter Workspace
            </p>

            <h1 className="text-5xl font-bold">
              Recruiter Dashboard
            </h1>

          </div>

          <button className="bg-blue-600 px-6 py-3 rounded-xl">
            + Post Job
          </button>

        </div>


        {/* Top Metrics */}

        <div className="grid md:grid-cols-4 gap-5 mb-10">

          {[
            ["Active Jobs","12"],
            ["Candidates","184"],
            ["Shortlisted","28"],
            ["Interviews","9"]
          ].map(([title,value]) => (

            <div
              key={title}
              className="bg-slate-900 rounded-2xl p-6"
            >

              <p className="text-slate-400">
                {title}
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {value}
              </h2>

            </div>

          ))}

        </div>


        {/* Candidate Table */}

        <div className="bg-slate-900 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Top Candidates
          </h2>

          <div className="grid gap-5">

            {[
              ["Lalit","₹2Cr","118%","ERP"],
              ["Rahul","₹1.5Cr","110%","SaaS"],
              ["Priya","₹90L","125%","FMCG"]
            ].map(([name,revenue,quota,industry]) => (

              <div
                key={name}
                className="bg-slate-800 rounded-2xl p-6 flex justify-between items-center"
              >

                <div>

                  <h3 className="text-2xl font-bold">
                    {name}
                  </h3>

                  <p className="text-slate-400">
                    {industry}
                  </p>

                </div>

                <div className="text-right">

                  <p>
                    Revenue: {revenue}
                  </p>

                  <p>
                    Quota: {quota}
                  </p>

                </div>

                <button className="bg-blue-600 px-5 py-3 rounded-xl">
                  View
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}