import "./AmazonButton.css";

type AmazonButtonVariant = "add-to-cart" | "buy-now" | "place-order";

interface AmazonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AmazonButtonVariant;
}

export function AmazonButton({
  variant = "add-to-cart",
  className,
  children,
  ...props
}: AmazonButtonProps) {
  const classes = [`amazon-btn`, `amazon-btn--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
