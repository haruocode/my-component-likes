import type { ReactNode } from "react";
import "./LineCallout.css";

export type LineCalloutVariant = "info" | "warning";

interface LineCalloutProps {
  variant?: LineCalloutVariant;
  title?: string;
  items: ReactNode[];
}

export function LineCallout({
  variant = "info",
  title,
  items,
}: LineCalloutProps) {
  const defaultTitle = variant === "info" ? "参考" : "重要";

  return (
    <div className={`line-callout line-callout--${variant}`}>
      <div className="line-callout__header">
        <span className="line-callout__icon" aria-hidden="true" />
        <span className="line-callout__title">{title ?? defaultTitle}</span>
      </div>
      <ul className="line-callout__list">
        {items.map((item, i) => (
          <li key={i} className="line-callout__item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
