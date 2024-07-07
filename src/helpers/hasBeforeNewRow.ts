export default function hasBeforeNewRow(afterIdNewRow: null | string, indexRow: null | string): number {

  if (!afterIdNewRow || !indexRow) return 0
  if (afterIdNewRow[0] !== indexRow[0]) return 0

  const getNumberRow = Number("0." + indexRow.replaceAll("_", ""))
  const getNumberNewRow = Number("0." + afterIdNewRow.replaceAll("_", ""))

  if (getNumberRow > getNumberNewRow) {
    console.log(afterIdNewRow, indexRow) 
    return 1
  }

  return 0
}