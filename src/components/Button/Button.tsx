import style from './Button.module.css'

export interface buttonProps{
    label: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    className: string

}

export const Button:React.FC<buttonProps> = ({label,onClick,style}) => {

  return (
    <button onClick={onClick} style={style}>
        {label}
    </button>
  )
}
