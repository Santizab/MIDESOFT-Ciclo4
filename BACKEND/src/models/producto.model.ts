import {Entity, hasOne, model, property} from '@loopback/repository';
import {TipoProducto} from './tipo-producto.model';

@model()
export class Producto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: false,
  })
  id_tipo_producto: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
    required: true,
  })
  referencia?: string;

  @property({
    type: 'string',
    required: true,
  })
  imagen: string;

  @hasOne(() => TipoProducto)
  tipoProducto: TipoProducto;

  @property({
    type: 'string',
  })
  pedidoId?: string;

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
