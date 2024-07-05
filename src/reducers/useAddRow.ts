import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import findNodeById from "src/helpers/findNodeById"
import formDataToJson from "src/helpers/formDataToJson"
import { IDataRow } from "src/types/IRow"

export default function useAddRow(parentId: any) {

  const queryClient = useQueryClient()

  const mutationAddRow = useMutation({
    mutationKey: ["add row"],
    mutationFn: (formData: FormData) => {
      const data = formDataToJson(formData)
      return axios
        .post('http://185.244.172.108:8081/v1/outlay-rows/entity/133771/row/create', data)
        .then((res) => { return res.data.current as IDataRow })
    },
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ["rows"] })
      queryClient.setQueryData(["rows"], (rows: IDataRow[]) => {
        let updData = JSON.parse(JSON.stringify(rows))
        let _row = findNodeById(parentId, updData)
        if (_row) {
          if (_row.child?.length) {
            _row.child.push(data)
          } else { _row.child = [data] }

          return updData;
        }
        return [...updData, data]
      })
    }
  })

  return mutationAddRow

}