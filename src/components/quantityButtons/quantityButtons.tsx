import { FC } from "react"

type IQuantityButtonsProps = {
  onClickButtonAdd: () => void
  onClickButtonRemove: () => void
  quantity: number
}

export const QuantityButtons: FC<IQuantityButtonsProps> = ({
  onClickButtonAdd,
  onClickButtonRemove,
  quantity = 1,
}) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <button
        onClick={() => onClickButtonRemove()}
        className="px-2 py-1 bg-gray-200 rounded"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => onClickButtonAdd()}
        className="px-2 py-1 bg-gray-200 rounded"
      >
        +
      </button>
    </div>
  )
}
