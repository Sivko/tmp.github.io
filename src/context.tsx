import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";

interface IAfterNewRow {
  index: string | null
  id: string | null
}

interface ITheme {
  afterNewRow: IAfterNewRow
  setAfterNewRow: React.Dispatch<React.SetStateAction<IAfterNewRow>>
  idRowEdit: string | null
  setIdRowEdit: React.Dispatch<React.SetStateAction<string | null>>
}

export const Context = createContext<any | ITheme>(null);
export const queryClient = new QueryClient()

function PageProvider({ children }: { children: React.ReactNode; }) {

  const [afterNewRow, setAfterNewRow] = useState<IAfterNewRow>({ index: null, id: null })
  const [idRowEdit, setIdRowEdit] = useState<string | null>(null)

  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{  afterNewRow, setAfterNewRow, idRowEdit, setIdRowEdit }}>{children}</Context.Provider>
    </QueryClientProvider>
  )
}

export default PageProvider;
