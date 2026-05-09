import "./ChatGPTSuggestionChip.css";

interface ChatGPTSuggestionChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export function ChatGPTSuggestionChip({
  icon,
  className,
  children,
  ...props
}: ChatGPTSuggestionChipProps) {
  const classes = ["chatgpt-chip", className].filter(Boolean).join(" ");
  return (
    <button className={classes} {...props}>
      {icon && <span className="chatgpt-chip__icon" aria-hidden="true">{icon}</span>}
      {children}
    </button>
  );
}
