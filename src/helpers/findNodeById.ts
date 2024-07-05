import { IDataRow } from "src/types/IRow";

export default function findNodeById(id: number | string, data: IDataRow[]): IDataRow | false {
  for (let obj of data) {
    if (obj.id === Number(id)) {
      return obj;
    } else if (obj.child) {
      let result = findNodeById(id, obj.child);
      if (result) {
        return result;
      }
    }
  }
  return false;
}
