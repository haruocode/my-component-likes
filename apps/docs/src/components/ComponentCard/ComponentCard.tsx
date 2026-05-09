import type { ReactNode } from "react";
import { CodeViewer } from "../CodeViewer/CodeViewer";
import type { CodeFile } from "../../data/registry";
import "./ComponentCard.css";

interface ComponentCardProps {
  name: string;
  description?: string;
  referenceUrl?: string;
  preview: ReactNode;
  files: CodeFile[];
}

export function ComponentCard({
  name,
  description,
  referenceUrl,
  preview,
  files,
}: ComponentCardProps) {
  return (
    <div className="component-card">
      <div className="component-card__header">
        <div className="component-card__meta">
          <h3 className="component-card__name">{name}</h3>
          {description && <p className="component-card__desc">{description}</p>}
        </div>
        {referenceUrl && (
          <a
            className="component-card__ref"
            href={referenceUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="参照元を開く"
            title={referenceUrl}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>
      <div className="component-card__preview">{preview}</div>
      <CodeViewer files={files} />
    </div>
  );
}
