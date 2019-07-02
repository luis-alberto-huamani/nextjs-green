import './button.scss';
import classnames from 'classnames';

const Button = ({ id, color, size, onClick, type, children }) => (
  <button
    id={id}
    color={color}  
    onClick={onClick}
    type={type}
    className={classnames({
      md: size === "md",
      lg: size === "lg",
      light: color === "light",
      dark: color ==="dark"
    })}
  >
    {children}
  </button>
);

export default Button;
