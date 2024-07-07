import { IRow } from "src/types/IRow";


export default function countChildren(obj: IRow, start = 0, afterIdNewRow: number) {
  let count = start;

  if (Number(afterIdNewRow) === Number(obj.id))
    count += 1

  if (obj.child) {
    count += obj.child.length;
    obj.child.forEach((child: IRow) => {
      count += countChildren(child, 0, afterIdNewRow);
    });
  }

  return count;
}
