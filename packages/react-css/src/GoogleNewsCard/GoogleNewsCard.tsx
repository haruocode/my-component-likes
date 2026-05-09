import "./GoogleNewsCard.css";

interface GoogleNewsCardProps {
  title: string;
  description?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  sourceName: string;
  sourceIconSrc?: string;
  publishedAt: string;
  onClick?: () => void;
  onMore?: () => void;
}

export function GoogleNewsCard({
  title,
  description,
  thumbnailSrc,
  thumbnailAlt = "",
  sourceName,
  sourceIconSrc,
  publishedAt,
  onClick,
  onMore,
}: GoogleNewsCardProps) {
  return (
    <div className="google-news-card">
      <button className="google-news-card__body-btn" onClick={onClick} style={{ display: "contents" }}>
        <div className="google-news-card__thumbnail" aria-hidden={!thumbnailSrc}>
          {thumbnailSrc && <img src={thumbnailSrc} alt={thumbnailAlt} />}
        </div>
        <div className="google-news-card__body">
          <p className="google-news-card__title">{title}</p>
          {description && <p className="google-news-card__description">{description}</p>}
          <div className="google-news-card__meta">
            {sourceIconSrc && (
              <img className="google-news-card__source-icon" src={sourceIconSrc} alt="" />
            )}
            <span className="google-news-card__source">{sourceName}</span>
            <span className="google-news-card__dot">·</span>
            <span className="google-news-card__time">{publishedAt}</span>
          </div>
        </div>
      </button>
      {onMore && (
        <button className="google-news-card__more" onClick={onMore} aria-label="その他のオプション">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      )}
    </div>
  );
}
