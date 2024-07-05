export default function hasBeforeNewRow(afterIdNewRow: null | string, indexRow: null | string): number {

  if (!afterIdNewRow || !indexRow) return 0
  if (afterIdNewRow[0] !== indexRow[0]) return 0

  const _afterIdNewRow = afterIdNewRow?.split("_")
  const _indexRow = indexRow?.split("_")

  if (afterIdNewRow.length === indexRow.length) {
    // console.log(Number(_afterIdNewRow.join("")) + "===" + Number(_indexRow.join("")))
    if (Number(_afterIdNewRow.join("") + 1) === Number(_indexRow.join(""))) return 1
    if (_indexRow[_indexRow.length - 1] > _afterIdNewRow[_afterIdNewRow?.length - 1]) {
      console.log(_indexRow[_indexRow.length - 1] + ">" + _afterIdNewRow[_afterIdNewRow?.length - 1])
      return 0
    }
  }

  if (afterIdNewRow.length > indexRow.length) {
    const sliceAfter = _afterIdNewRow.slice(0, _indexRow.length - 1).join("")
    const numberIdNewRow = Number(sliceAfter)
    const numberIndexRow = Number(indexRow?.replaceAll("_", ""))
    if (numberIndexRow > numberIdNewRow) return 1
  }

  return 0
}