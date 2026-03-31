interface IButtonProps {
  open: boolean;
  onClick: () => void;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ open, onClick, ariaLabel, className, children }) => {
  return (
    <button
      type="button"
      className={`${className ?? "button"} ${open ? "open" : ""}`}
      onClick={onClick}
      aria-expanded={open}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;