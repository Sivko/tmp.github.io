import RowItem from "./RowItem";
import NewRow from "./NewRow";
import { IRow } from "src/types/IRow";
import { useContext } from "react";
import { Context } from "src/context";

export default function Rows(data: IRow) {

  const { afterNewRow } = useContext(Context)

  const ParentRow = (data: IRow) => {
    return (<>
      <RowItem {...data} />
      {!!data.child?.length && data.child.map((item, index) => <ParentRow key={item.id} beforeItems={data.child?.slice(0, index)} {...item} index={`${data.index}_${index}`} level={data.level + 1} />)}
      {(afterNewRow.index === data.index) && <NewRow {...data} level={data.level + 1} />}
    </>)
  }

  return (<ParentRow {...data} />)
}