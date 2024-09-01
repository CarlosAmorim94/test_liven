import { FC } from "react"

type IButtonProps = {
  onClick: () => void
  text: string
  className?: string
}

export const Button: FC<IButtonProps> = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded text-white ${className}`}
    >
      {text}
    </button>
  )
}
