import { ChangeEvent } from "react"

type CounterPropsType = {
  onChangeValue: (value: string) => void
  valueCounter: string
  name: string
}

export function Counter ({onChangeValue, valueCounter, name}: CounterPropsType) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeValue(e.currentTarget.value)
  }
  return (
    <>
      <label>{name} Value: </label>
      <input type="text" value={valueCounter} onChange={onChangeHandler}/>
    </>
  )
}