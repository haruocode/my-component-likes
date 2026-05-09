import "./RakutenPlanCard.css";

interface RakutenPlanCardProps {
  label?: string;
  name: string;
  price: string;
  note?: string;
  badge?: React.ReactNode;
  selected?: boolean;
  onSelect?: () => void;
}

export function RakutenPlanCard({
  label,
  name,
  price,
  note,
  badge,
  selected = false,
  onSelect,
}: RakutenPlanCardProps) {
  return (
    <button
      className={`rakuten-plan-card${selected ? " rakuten-plan-card--selected" : ""}`}
      onClick={onSelect}
      aria-pressed={selected}
    >
      <span className="rakuten-plan-card__radio" aria-hidden="true">
        {selected && <span className="rakuten-plan-card__radio-dot" />}
      </span>
      <span className="rakuten-plan-card__body">
        {label && <p className="rakuten-plan-card__label">{label}</p>}
        <p className="rakuten-plan-card__name">{name}</p>
        <p className="rakuten-plan-card__price">{price}</p>
        {note && <p className="rakuten-plan-card__note">{note}</p>}
        {badge && <div className="rakuten-plan-card__badge">{badge}</div>}
      </span>
    </button>
  );
}
