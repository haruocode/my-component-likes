import { useId } from "react";
import "./RakutenToggle.css";

interface RakutenToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export function RakutenToggle({ checked, onChange, label }: RakutenToggleProps) {
  const id = useId();

  return (
    <label className="rakuten-toggle" htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        className="rakuten-toggle__input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={`rakuten-toggle__track${checked ? " rakuten-toggle__track--on" : ""}`}>
        <span className="rakuten-toggle__knob" />
      </span>
      {label && <span className="rakuten-toggle__label">{label}</span>}
    </label>
  );
}
