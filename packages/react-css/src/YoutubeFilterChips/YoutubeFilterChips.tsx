import "./YoutubeFilterChips.css";

interface FilterChip {
  id: string;
  label: string;
}

interface YoutubeFilterChipsProps {
  chips: FilterChip[];
  selected: string;
  onSelect: (id: string) => void;
}

export function YoutubeFilterChips({ chips, selected, onSelect }: YoutubeFilterChipsProps) {
  return (
    <div className="yt-filter-chips" role="list">
      {chips.map((chip) => (
        <button
          key={chip.id}
          role="listitem"
          className={`yt-chip${chip.id === selected ? " yt-chip--active" : ""}`}
          onClick={() => onSelect(chip.id)}
          aria-pressed={chip.id === selected}
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
}
