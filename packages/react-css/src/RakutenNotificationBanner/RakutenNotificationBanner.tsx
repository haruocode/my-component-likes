import "./RakutenNotificationBanner.css";

interface RakutenNotificationBannerProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
}

export function RakutenNotificationBanner({
  title,
  description,
  actionLabel,
  onAction,
  onClose,
}: RakutenNotificationBannerProps) {
  return (
    <div className="rakuten-banner" role="status">
      <p className="rakuten-banner__title">{title}</p>
      {description && <p className="rakuten-banner__desc">{description}</p>}
      {actionLabel && (
        <button className="rakuten-banner__action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
      {onClose && (
        <button className="rakuten-banner__close" onClick={onClose} aria-label="閉じる">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}
