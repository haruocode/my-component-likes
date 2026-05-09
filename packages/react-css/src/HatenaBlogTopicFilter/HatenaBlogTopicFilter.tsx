import { useState, useRef, useEffect } from "react";
import "./HatenaBlogTopicFilter.css";

export interface HatenaBlogTopic {
  id: string;
  label: string;
}

interface HatenaBlogTopicFilterProps {
  topics: HatenaBlogTopic[];
  selected: string | null;
  onSelect: (topicId: string | null) => void;
}

export function HatenaBlogTopicFilter({
  topics,
  selected,
  onSelect,
}: HatenaBlogTopicFilterProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hatena-topic-filter" ref={ref}>
      <div className="hatena-topic-filter__bar">
        <button
          className="hatena-topic-filter__all"
          onClick={() => setDropdownOpen((v) => !v)}
          aria-expanded={dropdownOpen}
        >
          すべてのトピック
          <svg
            className="hatena-topic-filter__chevron"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </button>
        {topics.map((topic) => (
          <button
            key={topic.id}
            className={`hatena-topic-filter__chip${selected === topic.id ? " hatena-topic-filter__chip--selected" : ""}`}
            onClick={() => {
              onSelect(topic.id);
              setDropdownOpen(false);
            }}
          >
            {topic.label}
          </button>
        ))}
      </div>
      {dropdownOpen && (
        <div className="hatena-topic-filter__dropdown" role="menu">
          {topics.map((topic) => (
            <button
              key={topic.id}
              className={`hatena-topic-filter__dropdown-item${selected === topic.id ? " hatena-topic-filter__dropdown-item--selected" : ""}`}
              role="menuitem"
              onClick={() => {
                onSelect(topic.id);
                setDropdownOpen(false);
              }}
            >
              {topic.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
