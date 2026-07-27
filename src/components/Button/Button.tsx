import styles from './Button.module.css'

export interface ButtonProps{
    label: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string

}

export const Button:React.FC<ButtonProps> = ({label,onClick,style,className}) => {

  return (
    <button onClick={onClick} style={style} className={`${styles.button} ${className || "" }`}>
        {label}
    </button>
  )
}
