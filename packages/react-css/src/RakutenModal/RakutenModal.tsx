import { useEffect } from "react";
import "./RakutenModal.css";

interface RakutenModalProps {
  open: boolean;
  onClose?: () => void;
  icon?: React.ReactNode;
  title: string;
  subtext?: string;
  children?: React.ReactNode;
}

export function RakutenModal({ open, onClose, icon, title, subtext, children }: RakutenModalProps) {
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose?.();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="rakuten-modal-overlay" onClick={onClose} role="dialog" aria-modal aria-label={title}>
      <div className="rakuten-modal" onClick={(e) => e.stopPropagation()}>
        {onClose && (
          <button className="rakuten-modal__close" onClick={onClose} aria-label="閉じる">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
        {icon && <div className="rakuten-modal__icon">{icon}</div>}
        <h2 className="rakuten-modal__title">{title}</h2>
        {subtext && <p className="rakuten-modal__subtext">{subtext}</p>}
        {children && <div className="rakuten-modal__actions">{children}</div>}
      </div>
    </div>
  );
}
