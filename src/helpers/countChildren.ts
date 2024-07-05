import { IRow } from "src/types/IRow";


export default function countChildren(obj: IRow, start = 0) {
  let count = start;

  if (obj.child) {
    count += obj.child.length;
    obj.child.forEach((child: IRow) => {
      count += countChildren(child);
    });
  }

  return count;
}
