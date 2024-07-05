export interface IDataRow {
  id: number
  rowName: string
  total: number
  salary: number
  mimExploitation: number
  machineOperatorSalary: number
  materials: number
  mainCosts: number
  supportCosts: number
  equipmentCosts: number
  overheads: number
  estimatedProfit: number
  child: IDataRow[]
  parentId?: string
}

export interface IRow extends IDataRow {
  beforeItems?: IRow[]
  level: number
  index: string
  child: IRow[]
}
