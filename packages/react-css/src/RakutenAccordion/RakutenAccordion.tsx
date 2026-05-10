import { useState } from "react";
import "./RakutenAccordion.css";

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface RakutenAccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

export function RakutenAccordion({ items, defaultOpenId }: RakutenAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null);

  return (
    <div className="rakuten-accordion">
      {items.map((item) => {
        const isOpen = item.id === openId;
        return (
          <div key={item.id} className="rakuten-accordion__item">
            <button
              className="rakuten-accordion__trigger"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="rakuten-accordion__icon" aria-hidden="true">
                <svg className={`rakuten-accordion__chevron${isOpen ? " rakuten-accordion__chevron--open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="2,4 6,8 10,4" />
                </svg>
              </span>
              <span className="rakuten-accordion__question">{item.question}</span>
            </button>
            <div className={`rakuten-accordion__body${isOpen ? " rakuten-accordion__body--open" : ""}`} role="region">
              <div className="rakuten-accordion__content">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
