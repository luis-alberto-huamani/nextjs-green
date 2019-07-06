import './button.scss';
import classnames from 'classnames';

const Button = ({ id, color, size, onClick, type, children }) => (
  <div className="my_button shadow">
    <button
      id={id}
      color={color}  
      onClick={onClick}
      type={type}
      className={classnames({
        my_button: true,
        md: size === "md",
        lg: size === "lg",
        light: color === "light",
        dark: color ==="dark"
      })}
    >
      {children}
    </button>  
  </div>
);

export default Button;
