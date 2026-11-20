"use client";
import { useEffect, useState } from "react";

export default function Gallery({ title, images }: { title: string; images: string[] }) {
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % images.length);
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setI((v) => (v + 1) % images.length);
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open, images.length]);

  return (
    <>
      <button className="btn" onClick={() => { setI(0); setOpen(true); }}>Voir les photos ({images.length})</button>
      {open && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={title} onClick={() => setOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-bar">
              <span>{title} · {i + 1}/{images.length}</span>
              <button className="btn" onClick={() => setOpen(false)} autoFocus>Fermer</button>
            </div>
            <div className="modal-img">
              <img src={images[i]} alt={`${title}, photo ${i + 1}`} />
            </div>
            <div className="modal-nav">
              <button className="btn" onClick={prev}>Précédente</button>
              <button className="btn" onClick={next}>Suivante</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
