import { KeyboardEvent, useContext, useRef } from "react"

import { Context } from "src/context";
import { IRow } from "src/types/IRow";

import { FaRegTrashAlt } from "react-icons/fa"
import { MdFormatListBulletedAdd } from "react-icons/md";

import hasBeforeNewRow from "src/helpers/hasBeforeNewRow";
import countChildren from "src/helpers/countChildren";

import useRemoveRow from "src/reducers/useRemoveRow";
import useUpdateRow from "src/reducers/useUpdateRow";


export default function RowItem(data: IRow) {

  const mutationRemove = useRemoveRow(data)
  const mutationUpdate = useUpdateRow(data)

  const { afterNewRow, setAfterNewRow, idRowEdit, setIdRowEdit } = useContext(Context)
  const { index, level, beforeItems, id } = data
  const htmlForm = useRef<HTMLFormElement>(null)

  const isEdit = (idRowEdit === index);
  const ml = level > 1 ? { marginLeft: `${(level - 1) * 33}px` } : {}
  const addHeightAfterNewRow = hasBeforeNewRow(afterNewRow.index, index)
  const countChild = beforeItems?.length ? countChildren(beforeItems[beforeItems?.length - 1], beforeItems[beforeItems?.length - 1].child?.length ? 1 : 0) : 0
  const heigth = countChild ? (countChild + addHeightAfterNewRow) * 70 : 70 + (70 * addHeightAfterNewRow)

  return (
    <tr onDoubleClick={handlerDbClick}>
      <td className="w-0 relative">
        {level > 1 && <div className="afterLine" style={{ ...ml, height: `${heigth}px` }} />}
        <div className={`group hover:bg-background bg-black z-10 relative flex items-center justify-center py-2 px-2 gap-2 rounded w-fit`} style={ml}>
          <button className="text-blue-600 hover:text-blue-700" onClick={() => { setAfterNewRow({ index, id }); setIdRowEdit(null) }}>
            <MdFormatListBulletedAdd size={21} />
          </button>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity ">
            {!isEdit && <button className="text-red-600 hover:text-red-700" onClick={handlerRemove}>
              <FaRegTrashAlt size={19} />
            </button>}
          </div>
        </div>
      </td>
      <td>{isEdit ? <input type="text" defaultValue={data.rowName} onKeyUp={handlerKeyEnter} required form={`form_${index}`} name="rowName" /> : data.rowName} </td>
      <td>{isEdit ? <input type="number" defaultValue={data.salary} onKeyUp={handlerKeyEnter} required form={`form_${index}`} name="salary" /> : data.salary}</td>
      <td>{isEdit ? <input type="number" defaultValue={data.materials} onKeyUp={handlerKeyEnter} required form={`form_${index}`} name="materials" /> : data.materials}</td>
      <td>{isEdit ? <input type="number" defaultValue={data.overheads} onKeyUp={handlerKeyEnter} required form={`form_${index}`} name="overheads" /> : data.overheads}</td>
      <td>{isEdit ? <input type="number" defaultValue={data.estimatedProfit} onKeyUp={handlerKeyEnter} required form={`form_${index}`} name="estimatedProfit" /> : data.estimatedProfit}</td>

      <td className="hidden">
        <form action="" id={`form_${index}`} className="" ref={htmlForm} onSubmit={handlerSubmit}>
          <input type="hidden" value={data.id} name="id" />
          <input type="hidden" value={0} name="total" />
          <input type="hidden" value={0} name="mimExploitation" />
          <input type="hidden" value={0} name="machineOperatorSalary" />
          <input type="hidden" value={0} name="mainCosts" />
          <input type="hidden" value={0} name="supportCosts" />
          <input type="hidden" value={0} name="equipmentCosts" />
          <input type="hidden" value={afterNewRow.id && afterNewRow.id !== -1 ? afterNewRow.id : "null"} name="parentId" />
          <input type="hidden" value={"[]"} name="child" />
        </form>
      </td>
    </tr>
  )

  function handlerDbClick() {
    if (afterNewRow.index !== null)
      setAfterNewRow({ index: null, id: null })
    if (!isEdit)
      setIdRowEdit(index)
  }

  function handlerKeyEnter(event: KeyboardEvent) {
    if (event.code !== "Enter") return;
    htmlForm.current?.requestSubmit()
  }

  function handlerRemove() {
    mutationRemove.mutate()
  }

  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutationUpdate.mutate(new FormData(e.currentTarget))
    setIdRowEdit(null)
  }
}

