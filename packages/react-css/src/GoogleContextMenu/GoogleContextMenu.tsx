import "./GoogleContextMenu.css";

export interface GoogleContextMenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

interface GoogleContextMenuProps {
  items: GoogleContextMenuItem[];
}

export function GoogleContextMenu({ items }: GoogleContextMenuProps) {
  return (
    <div className="google-context-menu" role="menu">
      {items.map((item) => (
        <button
          key={item.id}
          className={`google-context-menu__item${item.active ? " google-context-menu__item--active" : ""}`}
          role="menuitem"
          onClick={item.onClick}
        >
          <span className="google-context-menu__icon" aria-hidden="true">{item.icon}</span>
          <span className="google-context-menu__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
