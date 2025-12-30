export default function FullResultView({ result }: { result: any }) {
  const { persona, recommendations, finance, student } = result;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* College Logo Placeholder */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-400">Logo</span>
          </div>
        </div>

        {/* HERO */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🌾 {persona.title}
          </h1>
          <p className="text-sm text-gray-500 font-medium">Pongal Tech Persona</p>
        </div>

        {/* STUDENT INFO */}
        <div className="text-center text-sm font-medium text-gray-600 bg-white rounded-xl py-3 px-4 border border-gray-100">
          {student.name} • {student.department} • Year {student.year}
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-8">
          {/* DESCRIPTION */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">About Your Persona</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              {persona.description}
            </p>
          </section>

          {/* STRENGTHS */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">💪 Strengths</h2>
            <div className="flex flex-wrap gap-3">
              {persona.strengths.map((s: string) => (
                <span
                  key={s}
                  className="px-5 py-2.5 rounded-lg bg-green-50 text-green-800 text-sm font-semibold border-2 border-green-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* CENTRES */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              🏛 Centres of Excellence
            </h2>
            <ul className="space-y-3">
              {recommendations.centres.map((c: string) => (
                <li
                  key={c}
                  className="bg-orange-50 px-5 py-3.5 rounded-lg text-base font-semibold text-gray-900 border-2 border-orange-200"
                >
                  {c}
                </li>
              ))}
            </ul>
          </section>

          {/* CLUBS */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              🎭 Clubs to Explore
            </h2>
            <ul className="space-y-3">
              {recommendations.clubs.map((c: string) => (
                <li
                  key={c}
                  className="bg-emerald-50 px-5 py-3.5 rounded-lg text-base font-semibold text-gray-900 border-2 border-emerald-200"
                >
                  {c}
                </li>
              ))}
            </ul>
          </section>

          {/* FINANCE */}
          {finance && (
            <section className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
              <h2 className="text-xl font-bold text-green-900 mb-4">
                💰 Smart Finance Tip
              </h2>
              <ul className="space-y-2.5">
                {finance.advice.map((tip: string) => (
                  <li key={tip} className="text-base text-gray-800 leading-relaxed font-medium">
                    • {tip}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
