import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoProducto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  nombre_tipo_producto: number;

  @property({
    type: 'string',
  })
  productoId?: string;

  constructor(data?: Partial<TipoProducto>) {
    super(data);
  }
}

export interface TipoProductoRelations {
  // describe navigational properties here
}

export type TipoProductoWithRelations = TipoProducto & TipoProductoRelations;
