import { forwardRef } from 'react';

const PosterView = forwardRef<HTMLDivElement, { result: any }>(
  ({ result }, ref) => {
    const { persona, recommendations, finance, student } = result;

    const strengths = persona.strengths.slice(0, 4);
    const centre = recommendations.centres[0];
    const club = recommendations.clubs[0];
    const financeTip = finance?.advice?.[0];

    const shortDescription = persona.description
      .split('.')
      .slice(0, 2)
      .join('.')
      .trim() + '.';

    return (
      <div
        ref={ref}
        style={{
          width: '360px',
          height: '640px',
          backgroundColor: '#ffffff',
          borderRadius: '28px',
          overflow: 'hidden',
          fontFamily: 'Poppins, sans-serif',
          boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* HEADER */}
        <div
           style={{
    padding: '20px 16px', // reduced
    background: 'linear-gradient(135deg,#f97316,#fbbf24)',
    color: '#ffffff',
    textAlign: 'center',
  }}
        >
          <h1 style={{ fontSize: '20px', fontWeight: 800 }}>
            🌾 {persona.title}
          </h1>
          <p style={{ fontSize: '11px', opacity: 0.95 }}>
            Pongal Tech Persona
          </p>
        </div>

        {/* ID STRIP */}
        <div
          style={{
            textAlign: 'center',
            fontSize: '11px',
            fontWeight: 600,
            padding: '8px',
            color: '#374151',
            borderBottom: '1px solid #f3f4f6',
          }}
        >
          {student.name} • {student.department} • Year {student.year}
        </div>

        {/* BODY */}
        <div style={{ padding: '18px', flex: 1 }}>
          <p
            style={{
    textAlign: 'center',
    fontSize: '12.5px',
    lineHeight: 1.6,
    marginBottom: '14px',
    color: '#4b5563',
    fontStyle: 'italic',
  }}
          >
            "{shortDescription}""
          </p>

          {/* STRENGTHS */}
          <div style={{ textAlign: 'center', marginBottom: '14px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700 }}>
              💪 Strengths
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                justifyContent: 'center',
                marginTop: '8px',
              }}
            >
              {strengths.map((s: string) => (
                <span
  key={s}
  style={{
    background: '#ecfeff',
    color: '#0369a1',
    padding: '6px 12px',
    borderRadius: '999px',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.2px',
  }}
>
  {s}
</span>
              ))}
            </div>
          </div>

          {/* MINI HIGHLIGHTS */}
          <MiniCard title="🏛 Centre" value={centre} bg="#fff7ed" />
          <MiniCard title="🎭 Club" value={club} bg="#f0fdf4" />

          {/* FINANCE */}
          {financeTip && (
            <div
             style={{
    marginTop: '14px',
    padding: '14px',
    background: 'linear-gradient(135deg,#d1fae5,#a7f3d0)',
    borderRadius: '18px',
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: 700,
    color: '#065f46',
  }}

            >
              💰 Smart Money Tip
              <div style={{ marginTop: '6px', fontWeight: 600 }}>
                {financeTip}
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
       <div
  style={{
    fontSize: '10px',
    textAlign: 'center',
    padding: '10px',
    color: '#6b7280',
    borderTop: '1px dashed #e5e7eb',
  }}
>
  🌾 Pongal Tech Fest • Your Tech Journey
</div>

      </div>
    );
  }
);

export default PosterView;

/* Helper */
function MiniCard({
  title,
  value,
  bg,
}: {
  title: string;
  value?: string;
  bg: string;
}) {
  if (!value) return null;

  return (
    <div
      style={{
        background: bg,
        padding: '10px',
        borderRadius: '12px',
        marginTop: '8px',
        textAlign: 'center',
        fontSize: '12px',
        fontWeight: 700,
      }}
    >
      {title}
      <div style={{ marginTop: '4px', fontWeight: 600 }}>
        {value}
      </div>
    </div>
  );
}
