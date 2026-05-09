import "./YoutubeBottomNav.css";

interface BottomNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface YoutubeBottomNavProps {
  items: BottomNavItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function YoutubeBottomNav({ items, activeId, onSelect }: YoutubeBottomNavProps) {
  return (
    <nav className="yt-bottom-nav">
      {items.map((item) => (
        <button
          key={item.id}
          className={`yt-bottom-nav__item${item.id === activeId ? " yt-bottom-nav__item--active" : ""}`}
          onClick={() => onSelect(item.id)}
          aria-current={item.id === activeId ? "page" : undefined}
        >
          {item.icon}
          <span className="yt-bottom-nav__label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
