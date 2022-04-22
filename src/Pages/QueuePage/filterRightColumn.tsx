import { useRef } from "react";
import { selectReason } from "./store"

export const FilterRightColumn = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <span>Filters for Queue Page</span>
      <input ref={inputRef} placeholder='Search for a reason'></input>
      <button onClick={() => selectReason(inputRef.current?.value || '')}>filter!</button>
    </>
  )
};
