export interface buttonProps{
    label: string;
    onClick: () => void;

}

export const Button:React.FC<buttonProps> = ({label,onClick}) => {
  return (
    <button onClick={onClick}>
        {label}
    </button>
  )
}
