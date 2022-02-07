export interface IDetails {
  autor: string
  codigo: string
  nombre: string
  serie: Array<ISerie>
  unidad_medida: string
  version: string
}

export interface ISerie {
  fecha: Date
  valor: number
}
