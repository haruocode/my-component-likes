import { useState } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ComponentCard } from "./components/ComponentCard/ComponentCard";
import { useTheme } from "./hooks/useTheme";
import { SITES } from "./data/registry";
import "./App.css";

export default function App() {
  const { theme, toggle } = useTheme();
  const [activeSiteId, setActiveSiteId] = useState(SITES[0].id);

  const activeSite = SITES.find((s) => s.id === activeSiteId) ?? SITES[0];

  return (
    <div className="app">
      <header className="app-header">
        <span className="app-header__title">my-component-likes</span>
        <button
          className="theme-toggle"
          onClick={toggle}
          aria-label={theme === "light" ? "ダークモードに切り替え" : "ライトモードに切り替え"}
        >
          {theme === "light" ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>
      </header>

      <aside className="app-sidebar">
        <Sidebar sites={SITES} activeId={activeSiteId} onSelect={setActiveSiteId} />
      </aside>

      <main className="app-content">
        <h1 className="content-title">{activeSite.label}</h1>

        {activeSite.components.length === 0 ? (
          <div className="empty-state">
            <p>まだコンポーネントがありません</p>
          </div>
        ) : (
          activeSite.components.map((comp) => (
            <ComponentCard
              key={comp.id}
              name={comp.name}
              description={comp.description}
              referenceUrl={comp.referenceUrl}
              preview={comp.preview}
              files={comp.files}
            />
          ))
        )}
      </main>
    </div>
  );
}
