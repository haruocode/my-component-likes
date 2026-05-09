import "./YoutubeSearchBar.css";

interface YoutubeSearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export function YoutubeSearchBar({ onSearch, ...props }: YoutubeSearchBarProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSearch?.(e.currentTarget.value);
    }
  }

  function handleClick() {
    const input = document.querySelector<HTMLInputElement>(".yt-search__input");
    if (input) onSearch?.(input.value);
  }

  return (
    <div className="yt-search">
      <input
        type="search"
        className="yt-search__input"
        onKeyDown={handleKeyDown}
        {...props}
      />
      <button className="yt-search__btn" aria-label="検索" onClick={handleClick}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </button>
    </div>
  );
}
