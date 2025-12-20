import html2canvas from 'html2canvas';
import { useRef } from 'react';

import FullResultView from './FullResultView';
import PosterView from './PosterView';

export default function ResultPage({ result }: { result: any }) {
  const posterRef = useRef<HTMLDivElement>(null);

  const downloadPoster = async () => {
    if (!posterRef.current) return;

    const canvas = await html2canvas(posterRef.current, {
      backgroundColor: '#ffffff',
      scale: 1,
      useCORS: true,
    });

    const link = document.createElement('a');
    link.download = 'Pongal_Persona.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const sharePoster = async () => {
    if (!posterRef.current) return;

    const canvas = await html2canvas(posterRef.current, {
      backgroundColor: '#ffffff',
      scale: 1,
      useCORS: true,
    });

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve)
    );

    if (!blob) return;

    const file = new File([blob], 'Pongal_Persona.png', {
      type: 'image/png',
    });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: 'My Pongal Tech Persona 🌾',
        text: 'Found my tech persona at Pongal Tech Fest!',
      });
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(
          'Check out my Pongal Tech Persona 🌾'
        )}`,
        '_blank'
      );
    }
  };

  return (
    <>
      {/* HIDDEN POSTER (NO TRANSFORMS ANYWHERE) */}
      <div
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 0,
        }}
      >
        <PosterView ref={posterRef} result={result} />
      </div>

      {/* VISIBLE RESULT */}
      <FullResultView result={result} />

      {/* ACTION BUTTONS */}
      <div className="sticky bottom-0 bg-white py-4 flex gap-4 justify-center shadow-inner">
        <button
          onClick={downloadPoster}
          className="px-5 py-2 bg-green-600 text-white rounded-xl"
        >
          ⬇️ Download
        </button>

        <button
          onClick={sharePoster}
          className="px-5 py-2 bg-orange-500 text-white rounded-xl"
        >
          📤 Share
        </button>
      </div>
    </>
  );
}
