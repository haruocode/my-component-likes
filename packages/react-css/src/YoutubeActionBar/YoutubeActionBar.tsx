import "./YoutubeActionBar.css";

interface YoutubeActionBarProps {
  likeCount?: number;
  onLike?: () => void;
  onDislike?: () => void;
  onShare?: () => void;
  onAsk?: () => void;
  onSave?: () => void;
  onMore?: () => void;
}

export function YoutubeActionBar({
  likeCount,
  onLike,
  onDislike,
  onShare,
  onAsk,
  onSave,
  onMore,
}: YoutubeActionBarProps) {
  return (
    <div className="yt-action-bar">
      <div className="yt-action-bar__like-group">
        <button className="yt-action-bar__like" onClick={onLike} aria-label="高く評価">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2l-.01-.01L23 10z" />
          </svg>
          {likeCount !== undefined && <span>{likeCount.toLocaleString()}</span>}
        </button>
        <div className="yt-action-bar__like-divider" aria-hidden="true" />
        <button className="yt-action-bar__dislike" onClick={onDislike} aria-label="低く評価">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" />
          </svg>
        </button>
      </div>

      <button className="yt-action-bar__action" onClick={onShare}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
        </svg>
        共有
      </button>

      <button className="yt-action-bar__action" onClick={onAsk}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2L9.1 9.1 2 12l7.1 2.9L12 22l2.9-7.1L22 12l-7.1-2.9L12 2z" />
        </svg>
        質問する
      </button>

      <button className="yt-action-bar__action" onClick={onSave}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
        </svg>
        保存
      </button>

      <button className="yt-action-bar__more" onClick={onMore} aria-label="その他">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </button>
    </div>
  );
}
