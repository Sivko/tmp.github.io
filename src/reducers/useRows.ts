import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IDataRow } from "src/types/IRow";

export function useRows() {
  const { isPending, error, data, isFetching, isSuccess } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['rows'],
    queryFn: () =>
      axios
        .get('http://185.244.172.108:8081/v1/outlay-rows/entity/133771/row/list')
        .then((res) => { return res.data as IDataRow[] }),
  })

  return { isPending, error, data, isFetching, isSuccess }
}