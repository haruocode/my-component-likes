import "./HatenaBlogOdaiCard.css";

interface HatenaBlogOdaiCardProps {
  authorId: string;
  title: string;
  postCount: string;
  onWrite?: () => void;
}

export function HatenaBlogOdaiCard({
  authorId,
  title,
  postCount,
  onWrite,
}: HatenaBlogOdaiCardProps) {
  return (
    <div className="hatena-odai-card">
      <p className="hatena-odai-card__author">id:{authorId} さんが出題</p>
      <p className="hatena-odai-card__title">{title}</p>
      <div className="hatena-odai-card__footer">
        <span className="hatena-odai-card__count">投稿数 {postCount}</span>
        <button className="hatena-odai-card__btn" onClick={onWrite}>
          記事を書く
        </button>
      </div>
    </div>
  );
}
