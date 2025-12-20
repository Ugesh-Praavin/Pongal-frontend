export default function FullResultView({ result }: { result: any }) {
  const { persona, recommendations, finance, student } = result;

  return (
    <div className="max-w-md mx-auto px-4 py-6 space-y-4
">
      {/* HERO */}
      <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white p-6 text-center shadow-lg">
        <h1 className="text-2xl font-bold">🌾 {persona.title}</h1>
        <p className="text-sm opacity-90 mt-1">Pongal Tech Persona</p>
      </div>

      {/* STUDENT INFO */}
      <div className="text-center text-sm font-medium text-gray-700">
        {student.name} • {student.department} • Year {student.year}
      </div>

<div className="bg-white rounded-2xl shadow-md px-4 py-6 space-y-6">
      {/* DESCRIPTION */}
      <div className="bg-white rounded-xl p-4 shadow-sm text-gray-700 leading-relaxed">
        {persona.description}
      </div>

      {/* STRENGTHS */}
      <section>
        <h2 className="font-semibold text-green-700 mb-2">💪 Strengths</h2>
        <div className="flex flex-wrap gap-2">
          {persona.strengths.map((s: string) => (
           <span key={s} className="px-3 py-1.5 rounded-full bg-green-100 text-green-800 text-xs font-semibold">

              {s}
            </span>
          ))}
        </div>
      </section>

      {/* CENTRES */}
      <section>
        <h2 className="font-semibold text-orange-700 mb-2">
          🏛 Centres of Excellence
        </h2>
        <ul className="space-y-2">
          {recommendations.centres.map((c: string) => (
            <li
              key={c}
              className="bg-orange-50/70 px-4 py-2 rounded-xl text-sm font-medium shadow-sm"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* CLUBS */}
      <section>
        <h2 className="font-semibold text-emerald-700 mb-2">
          🎭 Clubs to Explore
        </h2>
        <ul className="space-y-2">
          {recommendations.clubs.map((c: string) => (
            <li
              key={c}
             className="bg-emerald-50/70 px-4 py-2 rounded-xl text-sm font-medium shadow-sm"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* FINANCE */}
      {finance && (
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-2xl p-4">
         <h2 className="font-bold text-green-800 mb-2">
  💰 Smart Finance Tip
</h2>
          <ul className="list-disc ml-5 text-sm space-y-1">
            {finance.advice.map((tip: string) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      )}
      </div>
    </div>
  );
}
