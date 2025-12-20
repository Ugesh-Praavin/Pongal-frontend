import { forwardRef } from 'react';

const PosterView = forwardRef<HTMLDivElement, { result: any }>(
  ({ result }, ref) => {
    const { persona, recommendations, finance, student } = result;

    const strengths = persona.strengths.slice(0, 4);
    const centre = recommendations.centres[0];
    const club = recommendations.clubs[0];
    const financeTip = finance?.advice?.[0];

    const shortDescription =
      persona.description.split('.').slice(0, 2).join('.').trim() + '.';

    return (
      <div
        ref={ref}
        style={{
          width: '1080px',
          height: '1920px',
          backgroundColor: '#ffffff',
          borderRadius: '28px',
          overflow: 'hidden',
          fontFamily: 'Poppins, sans-serif',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: '48px 40px',
            background: 'linear-gradient(135deg,#f97316,#fbbf24)',
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '48px', fontWeight: 800 }}>
            🌾 {persona.title}
          </h1>
          <p style={{ fontSize: '20px', opacity: 0.95 }}>
            Pongal Tech Persona
          </p>
        </div>

        {/* ID STRIP */}
        <div
          style={{
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 600,
            padding: '18px',
            color: '#374151',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          {student.name} • {student.department} • Year {student.year}
        </div>

        {/* BODY */}
        <div
          style={{
            padding: '64px 80px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              fontSize: '30px',
              lineHeight: 1.6,
              marginBottom: '48px',
              color: '#374151',
              fontStyle: 'italic',
            }}
          >
            “{shortDescription}”
          </p>

          {/* STRENGTHS */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '30px', fontWeight: 700 }}>
              💪 Strengths
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                marginTop: '24px',
              }}
            >
              {strengths.map((s: string) => (
                <span
                  key={s}
                  style={{
                    background: '#ecfeff',
                    color: '#0369a1',
                    padding: '16px 28px',
                    borderRadius: '999px',
                    fontSize: '22px',
                    fontWeight: 700,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CENTRE */}
          <MiniCard title="🏛 Centre" value={centre} bg="#fff7ed" />

          {/* CLUB */}
          <MiniCard title="🎭 Club" value={club} bg="#f0fdf4" />

          {/* FINANCE */}
          {financeTip && (
            <div
              style={{
                marginTop: '40px',
                padding: '32px',
                background: 'linear-gradient(135deg,#d1fae5,#a7f3d0)',
                borderRadius: '28px',
                textAlign: 'center',
                fontSize: '26px',
                fontWeight: 700,
                color: '#065f46',
              }}
            >
              💰 Smart Money Tip
              <div style={{ marginTop: '12px', fontWeight: 600 }}>
                {financeTip}
              </div>
            </div>
          )}

          {/* FLEX SPACER — THIS IS THE KEY */}
          <div style={{ flexGrow: 1 }} />
        </div>

        {/* FOOTER */}
        <div
          style={{
            fontSize: '20px',
            textAlign: 'center',
            padding: '32px',
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
        padding: '28px',
        borderRadius: '24px',
        marginTop: '28px',
        textAlign: 'center',
        fontSize: '26px',
        fontWeight: 700,
      }}
    >
      {title}
      <div style={{ marginTop: '12px', fontWeight: 600 }}>
        {value}
      </div>
    </div>
  );
}
