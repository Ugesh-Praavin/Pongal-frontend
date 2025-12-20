export default function ResultPage({ result }: { result: any }) {
  const { persona, recommendations } = result;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-2">{persona.title}</h1>
      <p className="mb-4">{persona.description}</p>

      <h3 className="font-semibold">Strengths</h3>
      <ul className="list-disc ml-5 mb-4">
        {persona.strengths.map((s: string) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h3 className="font-semibold">Recommended Centres</h3>
      <ul className="list-disc ml-5 mb-4">
        {recommendations.centres.map((c: string) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <h3 className="font-semibold">Recommended Clubs</h3>
      <ul className="list-disc ml-5">
        {recommendations.clubs.map((c: string) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
