import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { QuantityButtons } from "./quantityButtons"

describe("QuantityButtons Component", () => {
  test("should increase quantity when '+' button is clicked", () => {
    const onClickButtonAdd = jest.fn()
    const onClickButtonRemove = jest.fn()
    const initialQuantity = 1

    render(
      <QuantityButtons
        onClickButtonAdd={onClickButtonAdd}
        onClickButtonRemove={onClickButtonRemove}
        quantity={initialQuantity}
      />
    )

    const addButton = screen.getByText("+")

    fireEvent.click(addButton)

    expect(onClickButtonAdd).toHaveBeenCalledTimes(1)
  })

  test("should decrease quantity when '-' button is clicked", () => {
    const onClickButtonAdd = jest.fn()
    const onClickButtonRemove = jest.fn()
    const initialQuantity = 1

    render(
      <QuantityButtons
        onClickButtonAdd={onClickButtonAdd}
        onClickButtonRemove={onClickButtonRemove}
        quantity={initialQuantity}
      />
    )

    const removeButton = screen.getByText("-")

    fireEvent.click(removeButton)

    expect(onClickButtonRemove).toHaveBeenCalledTimes(1)
  })
})
