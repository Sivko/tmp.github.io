import { useContext } from "react"
import Rows from "./Rows"
import { useRows } from "src/reducers/useRows"
import { Context } from "src/context"
import { IRow } from "src/types/IRow"
import { CiCirclePlus } from "react-icons/ci";
import NewRow from "./Rows/NewRow"

export default function Project() {

  const { setAfterNewRow, afterNewRow } = useContext(Context)
  const { data, isSuccess } = useRows() as any

  return (
    <div className="px-2 bg-black">
      <table className="w-full">
        <colgroup>
          <col span={1} style={{ width: "5%" }} />
          <col span={1} style={{ width: "35%" }} />
          <col span={1} style={{ width: "15%" }} />
          <col span={1} style={{ width: "15%" }} />
          <col span={1} style={{ width: "15%" }} />
          <col span={1} style={{ width: "15%" }} />
        </colgroup>
        <thead>
          <tr>
            <td>Уровень</td>
            <td>Наименование работ</td>
            <td>Основная з/п</td>
            <td>Оборудование</td>
            <td>Накладные расходы</td>
            <td>Сметная прибыль</td>
          </tr>
        </thead>
        <tbody className="text-white">
          {data && isSuccess && data.map((item: IRow, index: any) => <Rows {...item} index={`${index}`} level={1} />)}
          {afterNewRow.id === -1 && <NewRow />}
        </tbody>
      </table>
      <div className="flex justify-end">
        <button className="p-4" onClick={() => setAfterNewRow({ id: -1, index: null })}><CiCirclePlus size={75} /></button>
      </div>
    </div>
  )
}