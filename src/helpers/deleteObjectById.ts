import { IDataRow } from "src/types/IRow";

export default function deleteObjectById(id: string | number, array: IDataRow[]) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      array.splice(i, 1);
      return true;
    } else if (array[i].child) {
      if (deleteObjectById(id, array[i].child)) {
        return true;
      }
    }
  }
  return false;
}
