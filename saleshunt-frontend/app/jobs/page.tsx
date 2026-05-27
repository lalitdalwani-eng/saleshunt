export default function JobsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-10">

          <p className="text-blue-400 uppercase text-sm mb-3">
            Sales opportunities
          </p>

          <h1 className="text-5xl font-bold mb-4">
            Find your next sales role
          </h1>

          <p className="text-slate-400">
            Explore opportunities based on performance and growth.
          </p>

        </div>


        {/* Filters */}

        <div className="flex flex-wrap gap-3 mb-10">

          {[
            "All",
            "ERP",
            "SaaS",
            "B2B",
            "Enterprise",
            "Channel",
            "Remote"
          ].map((item) => (

            <button
              key={item}
              className="bg-slate-900 px-5 py-3 rounded-full border border-slate-700"
            >
              {item}
            </button>

          ))}

        </div>


        {/* Job Cards */}

        <div className="grid gap-6">

          {[
            {
              company:"Odoo",
              role:"Account Executive",
              salary:"₹18L",
              type:"ERP"
            },

            {
              company:"Zoho",
              role:"Channel Manager",
              salary:"₹22L",
              type:"SaaS"
            },

            {
              company:"Oracle",
              role:"Partner Sales",
              salary:"₹30L",
              type:"Enterprise"
            }

          ].map((job)=>(

            <div
              key={job.role}
              className="bg-slate-900 rounded-3xl p-8"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-3xl font-bold">
                    {job.role}
                  </h2>

                  <p className="text-slate-400 mt-2">
                    {job.company}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-2xl font-bold text-green-400">
                    {job.salary}
                  </p>

                  <p className="text-slate-400">
                    {job.type}
                  </p>

                </div>

              </div>

              <button className="mt-6 bg-blue-600 px-6 py-3 rounded-xl">

                Apply →

              </button>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}