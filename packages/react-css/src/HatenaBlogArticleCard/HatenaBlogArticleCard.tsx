import "./HatenaBlogArticleCard.css";

interface HatenaBlogArticleCardProps {
  headline?: string;
  title: string;
  description?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  authorName: string;
  authorAvatarSrc?: string;
  starCount?: number;
  category?: string;
  onClick?: () => void;
}

export function HatenaBlogArticleCard({
  headline,
  title,
  description,
  thumbnailSrc,
  thumbnailAlt = "",
  authorName,
  authorAvatarSrc,
  starCount,
  category,
  onClick,
}: HatenaBlogArticleCardProps) {
  return (
    <button className="hatena-article-card" onClick={onClick}>
      {headline && (
        <p className="hatena-article-card__headline">{headline}</p>
      )}
      <div className="hatena-article-card__body">
        <div className="hatena-article-card__content">
          <p className="hatena-article-card__title">{title}</p>
          {description && (
            <p className="hatena-article-card__description">{description}</p>
          )}
        </div>
        {thumbnailSrc && (
          <img
            className="hatena-article-card__thumbnail"
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        )}
      </div>
      <div className="hatena-article-card__meta">
        {authorAvatarSrc ? (
          <img
            className="hatena-article-card__avatar"
            src={authorAvatarSrc}
            alt=""
          />
        ) : (
          <span
            className="hatena-article-card__avatar hatena-article-card__avatar--placeholder"
            aria-hidden="true"
          />
        )}
        <span className="hatena-article-card__author">{authorName}</span>
        {starCount !== undefined && (
          <span className="hatena-article-card__star">★{starCount}</span>
        )}
        {category && (
          <span className="hatena-article-card__category">{category}</span>
        )}
      </div>
    </button>
  );
}
