import countChildren from "src/helpers/countChildren"

import { IoIosCloseCircleOutline } from "react-icons/io";
import { IRow } from "src/types/IRow";
import { KeyboardEvent, useContext, useRef } from "react";
import { Context } from "src/context";
import useAddRow from "src/reducers/useAddRow";

export default function NewRow(data: IRow | any) {
  let level, heigth
  level = data.level

  const htmlForm = useRef<HTMLFormElement>(null)

  const { setAfterNewRow, afterNewRow } = useContext(Context)
  heigth = countChildren(data, 0, afterNewRow.id) * 70 || 70

  const ml = level > 1 ? { marginLeft: `${(level - 1) * 33}px` } : {}
  const parentId = afterNewRow.id && afterNewRow.id !== -1 ? afterNewRow.id : "null"

  const mutationAddRow = useAddRow(parentId)

  return (
    <tr>
      <td className="relative">
        {data.level && <div className="afterLine" style={{ ...ml, height: `${heigth}px` }} />}
        <div className={`hover:bg-background z-10 bg-black relative flex items-center justify-center py-2 px-2 gap-2 rounded w-fit`} style={ml}>
          <button className="text-red-600 hover:text-red-700" onClick={() => setAfterNewRow({ index: null, id: null })}>
            <IoIosCloseCircleOutline size={21} />
          </button>
        </div>
      </td>
      <td><input type="text" required onKeyUp={handlerKeyEnter} name={"rowName"} form={"form_addRow"} /></td>
      <td><input type="number" onKeyUp={handlerKeyEnter} name={"salary"} form={"form_addRow"} /></td>
      <td><input type="number" onKeyUp={handlerKeyEnter} name={"materials"} form={"form_addRow"} /></td>
      <td><input type="number" onKeyUp={handlerKeyEnter} name={"overheads"} form={"form_addRow"} /></td>
      <td><input type="number" onKeyUp={handlerKeyEnter} name={"estimatedProfit"} form={"form_addRow"} /></td>
      <td className="hidden">
        <form action="" id={`form_addRow`} className="" ref={htmlForm} onSubmit={handlerSubmit}>
          <input type="hidden" value={0} name="total" />
          <input type="hidden" value={0} name="mimExploitation" />
          <input type="hidden" value={0} name="machineOperatorSalary" />
          <input type="hidden" value={0} name="mainCosts" />
          <input type="hidden" value={0} name="supportCosts" />
          <input type="hidden" value={0} name="equipmentCosts" />
          <input type="hidden" value={parentId} name="parentId" />
          <input type="hidden" value={"[]"} name="child" />
        </form>
      </td>
    </tr >
  )

  function handlerKeyEnter(event: KeyboardEvent) {
    if (event.code !== "Enter") return;
    htmlForm.current?.requestSubmit()
  }

  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutationAddRow.mutate(new FormData(e.currentTarget))
  }

}