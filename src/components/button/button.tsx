import { FC, ButtonHTMLAttributes } from "react"

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
}

export const Button: FC<IButtonProps> = ({ text, className, ...props }) => {
  return (
    <button className={`py-2 px-4 rounded text-white ${className}`} {...props}>
      {text}
    </button>
  )
}
