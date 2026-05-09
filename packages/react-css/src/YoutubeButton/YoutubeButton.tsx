import "./YoutubeButton.css";

type YoutubeButtonVariant = "icon" | "pill";

interface YoutubeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: YoutubeButtonVariant;
}

export function YoutubeButton({
  variant = "pill",
  className,
  children,
  ...props
}: YoutubeButtonProps) {
  const classes = [`yt-btn`, `yt-btn--${variant}`, className].filter(Boolean).join(" ");
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
