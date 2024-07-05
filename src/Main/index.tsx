import { useContext, useEffect } from "react";
import Project from "./Project";
import Tabs from "./Tabs";
import { Context } from "src/context";

export default function Main() {
  const { setAfterNewRow, setIdRowEdit } = useContext(Context)

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return
      setAfterNewRow({ index: null, id: null })
      setIdRowEdit(null)
    })
  }, [])

  return (
    <div className="flex-1">
      <Tabs />
      <Project />
    </div>
  )
}