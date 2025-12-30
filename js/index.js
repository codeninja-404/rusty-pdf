import { useEffect, useRef, useState } from 'react';
import init, { PdfEngine } from './rusty_pdf.js';
import './styles.css';

const RustyPdf = ({ url, theme = 'system' }) => {
  const [engine, setEngine] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    const start = async () => {
      await init();
      try {
        const pdf = await PdfEngine.load_from_url(url);
        setEngine(pdf);
        setTotalPages(pdf.get_page_count());
        setLoading(false);
      } catch (err) {
        console.error("Failed to load PDF", err);
      }
    };
    start();
  }, [url]);

  useEffect(() => {
    if (engine && !loading) {
      engine.render_page_to_canvas(page, 'pdf-canvas');
    }
  }, [engine, page, loading]);

  const handleDownload = () => {
    if (!engine) return;
    const bytes = engine.get_file_bytes();
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.pdf';
    link.click();
  };

  // Theme detection
  const getThemeClass = () => {
    if (theme === 'light') return 'pdf-light';
    if (theme === 'dark') return 'pdf-dark';
    // System preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'pdf-dark' : 'pdf-light';
    }
    return 'pdf-light';
  };

  return (
    <div className={`pdf-wrapper ${getThemeClass()}`}>
      <div className="pdf-toolbar">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>‹</button>
        <span>{page} / {totalPages}</span>
        <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>›</button>
        <span>|</span>
        <button onClick={handleDownload}>↓</button>
      </div>

      <div className="canvas-container">
        {loading ? (
          <div className="pdf-loading">
            <div className="pdf-spinner"></div>
            <span>Loading...</span>
          </div>
        ) : (
          <canvas id="pdf-canvas" ref={canvasRef} />
        )}
      </div>

      <div className="pdf-footer">
        <a href="https://github.com/codeninja-404" target="_blank" rel="noopener noreferrer" className="pdf-credit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          codeninja-404
        </a>
      </div>
    </div>
  );
};

export default RustyPdf;
