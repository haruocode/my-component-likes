import "./RakutenButton.css";

type RakutenButtonVariant = "filled" | "outline" | "text";

interface RakutenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: RakutenButtonVariant;
  fullWidth?: boolean;
}

export function RakutenButton({
  variant = "filled",
  fullWidth = false,
  className,
  children,
  ...props
}: RakutenButtonProps) {
  const classes = [
    "rakuten-btn",
    `rakuten-btn--${variant}`,
    fullWidth && "rakuten-btn--full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
