export interface IDetails {
  autor: string
  codigo: string
  nombre: string
  serie: ISerie
  unidad_medida: string
  version: string
}

export interface ISerie {
  fecha: Date
  valor: number
}
