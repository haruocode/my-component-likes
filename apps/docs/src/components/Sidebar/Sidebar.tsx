import type { SiteEntry } from "../../data/registry";
import "./Sidebar.css";

interface SidebarProps {
  sites: SiteEntry[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function Sidebar({ sites, activeId, onSelect }: SidebarProps) {
  return (
    <nav className="sidebar">
      <ul className="sidebar__list" role="list">
        {sites.map((site) => (
          <li key={site.id}>
            <button
              className={`sidebar__item${site.id === activeId ? " sidebar__item--active" : ""}`}
              onClick={() => onSelect(site.id)}
              aria-current={site.id === activeId ? "page" : undefined}
            >
              <span className="sidebar__label">{site.label}</span>
              {site.components.length > 0 && (
                <span className="sidebar__count">{site.components.length}</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
