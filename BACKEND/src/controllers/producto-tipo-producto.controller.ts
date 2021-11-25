import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Producto,
  TipoProducto,
} from '../models';
import {ProductoRepository} from '../repositories';

export class ProductoTipoProductoController {
  constructor(
    @repository(ProductoRepository) protected productoRepository: ProductoRepository,
  ) { }

  @get('/productos/{id}/tipo-producto', {
    responses: {
      '200': {
        description: 'Producto has one TipoProducto',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TipoProducto),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<TipoProducto>,
  ): Promise<TipoProducto> {
    return this.productoRepository.tipoProducto(id).get(filter);
  }

  @post('/productos/{id}/tipo-producto', {
    responses: {
      '200': {
        description: 'Producto model instance',
        content: {'application/json': {schema: getModelSchemaRef(TipoProducto)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Producto.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoProducto, {
            title: 'NewTipoProductoInProducto',
            exclude: ['id'],
            optional: ['productoId']
          }),
        },
      },
    }) tipoProducto: Omit<TipoProducto, 'id'>,
  ): Promise<TipoProducto> {
    return this.productoRepository.tipoProducto(id).create(tipoProducto);
  }

  @patch('/productos/{id}/tipo-producto', {
    responses: {
      '200': {
        description: 'Producto.TipoProducto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoProducto, {partial: true}),
        },
      },
    })
    tipoProducto: Partial<TipoProducto>,
    @param.query.object('where', getWhereSchemaFor(TipoProducto)) where?: Where<TipoProducto>,
  ): Promise<Count> {
    return this.productoRepository.tipoProducto(id).patch(tipoProducto, where);
  }

  @del('/productos/{id}/tipo-producto', {
    responses: {
      '200': {
        description: 'Producto.TipoProducto DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(TipoProducto)) where?: Where<TipoProducto>,
  ): Promise<Count> {
    return this.productoRepository.tipoProducto(id).delete(where);
  }
}
