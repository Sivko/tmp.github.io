import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import deleteObjectById from "src/helpers/deleteObjectById"
import { IDataRow } from "src/types/IRow"

export default function useRemoveRow(data: IDataRow) {

  const queryClient = useQueryClient()

  const mutationRemove = useMutation({
    mutationKey: ["rows remove"],
    mutationFn: () => {
      return axios
        .delete(`http://185.244.172.108:8081/v1/outlay-rows/entity/133771/row/${data.id}/delete`)
        .then((res) => { return res.data })
    },
    onSuccess() {
      queryClient.setQueryData(["rows"], (rows: IDataRow[]) => {
        let updData = JSON.parse(JSON.stringify(rows))
        deleteObjectById(data.id, updData)
        return updData
      })
    }
  })

  return mutationRemove
}