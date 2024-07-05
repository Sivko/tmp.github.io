import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import findNodeById from "src/helpers/findNodeById"
import formDataToJson from "src/helpers/formDataToJson"
import { IDataRow } from "src/types/IRow"

export default function useUpdateRow(data: IDataRow) {

  const queryClient = useQueryClient()

  const mutationUpdate = useMutation({
    mutationKey: ["update row"],
    mutationFn: (formData: FormData) => {
      return axios
        .post(`//185.244.172.108:8081/v1/outlay-rows/entity/133771/row/${data.id}/update`, formDataToJson(formData))
        .then((res) => res.data.current as IDataRow)
    },
    onSuccess(data) {
      // queryClient.invalidateQueries({ queryKey: ["rows"] })
      queryClient.setQueryData(["rows"], (rows: IDataRow[]) => {
        let updData = JSON.parse(JSON.stringify(rows))
        let _row = findNodeById(data.id, updData)
        if (_row) {
          for (const key of Object.keys(_row)) {
            if (key !== 'child' && data.hasOwnProperty(key)) {
              //@ts-ignore
              _row[key] = data[key]
            }
          }
        }
        return updData
      })
    }
  })
  return mutationUpdate
}