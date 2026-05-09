import "./RakutenShortcutLinks.css";

export interface ShortcutLink {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

interface RakutenShortcutLinksProps {
  links: ShortcutLink[];
}

export function RakutenShortcutLinks({ links }: RakutenShortcutLinksProps) {
  return (
    <div className="rakuten-shortcut-links">
      {links.map((link) => (
        <button key={link.id} className="rakuten-shortcut-link" onClick={link.onClick}>
          <span className="rakuten-shortcut-link__arrow" aria-hidden="true">↓</span>
          <span className="rakuten-shortcut-link__label">{link.label}</span>
          <span className="rakuten-shortcut-link__icon" aria-hidden="true">{link.icon}</span>
        </button>
      ))}
    </div>
  );
}
