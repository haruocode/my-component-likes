import "./YoutubeSideMenu.css";

interface SideMenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  more?: boolean;
}

interface YoutubeSideMenuProps {
  items: SideMenuItem[];
  onSelect?: (id: string) => void;
}

export function YoutubeSideMenu({ items, onSelect }: YoutubeSideMenuProps) {
  return (
    <nav className="yt-side-menu">
      <ul className="yt-side-menu__list" role="list">
        {items.map((item) => (
          <li key={item.id}>
            <button
              className={`yt-side-menu__item${item.more ? " yt-side-menu__item--more" : ""}`}
              onClick={() => onSelect?.(item.id)}
            >
              <span className="yt-side-menu__icon" aria-hidden="true">
                {item.icon}
              </span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
