export default function CandidateProfile() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="bg-slate-900 rounded-3xl p-8 mb-8">

          <div className="flex flex-col md:flex-row justify-between gap-8">

            <div className="flex gap-6">

              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-3xl font-bold">

                LD

              </div>

              <div>

                <h1 className="text-4xl font-bold">
                  Lalit Dalwani
                </h1>

                <p className="text-slate-400 mt-2">
                  ERP Sales | Channel Growth | B2B
                </p>

                <div className="flex gap-3 mt-4">

                  <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full">
                    ERP
                  </span>

                  <span className="bg-teal-500/20 text-teal-400 px-4 py-2 rounded-full">
                    B2B
                  </span>

                  <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full">
                    Channel
                  </span>

                </div>

              </div>

            </div>

            <div>

              <div className="bg-green-600 px-5 py-3 rounded-full">
                ✓ Verified
              </div>

            </div>

          </div>

        </div>


        {/* Metrics */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

          {[
            ["Revenue", "₹2 Cr"],
            ["Quota", "118%"],
            ["Avg Deal", "₹8L"],
            ["Experience", "7 Years"],
          ].map(([title, value]) => (

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


        {/* About */}

        <div className="bg-slate-900 rounded-3xl p-8 mb-8">

          <h2 className="text-3xl font-bold mb-5">
            About
          </h2>

          <p className="text-slate-400 leading-8">

            Sales professional with experience in ERP,
            channel partnerships and enterprise growth.
            Consistently exceeded targets and managed
            high-value opportunities.

          </p>

        </div>


        {/* Timeline */}

        <div className="bg-slate-900 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Career Timeline
          </h2>

          <div className="grid gap-5">

            <div className="bg-slate-800 p-5 rounded-2xl">

              <h3 className="text-xl font-bold">
                Account Manager — Odoo
              </h3>

              <p className="text-slate-400">
                ERP Sales • Partnerships • Growth
              </p>

            </div>

            <div className="bg-slate-800 p-5 rounded-2xl">

              <h3 className="text-xl font-bold">
                Data Service Executive
              </h3>

              <p className="text-slate-400">
                Client Projects • Back Office
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}