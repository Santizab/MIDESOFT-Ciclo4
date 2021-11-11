import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {TipoProducto} from '../models';
import {TipoProductoRepository} from '../repositories';

export class TipoProductoController {
  constructor(
    @repository(TipoProductoRepository)
    public tipoProductoRepository : TipoProductoRepository,
  ) {}

  @post('/tipo-productos')
  @response(200, {
    description: 'TipoProducto model instance',
    content: {'application/json': {schema: getModelSchemaRef(TipoProducto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoProducto, {
            title: 'NewTipoProducto',
            exclude: ['id'],
          }),
        },
      },
    })
    tipoProducto: Omit<TipoProducto, 'id'>,
  ): Promise<TipoProducto> {
    return this.tipoProductoRepository.create(tipoProducto);
  }

  @get('/tipo-productos/count')
  @response(200, {
    description: 'TipoProducto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TipoProducto) where?: Where<TipoProducto>,
  ): Promise<Count> {
    return this.tipoProductoRepository.count(where);
  }

  @get('/tipo-productos')
  @response(200, {
    description: 'Array of TipoProducto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TipoProducto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TipoProducto) filter?: Filter<TipoProducto>,
  ): Promise<TipoProducto[]> {
    return this.tipoProductoRepository.find(filter);
  }

  @patch('/tipo-productos')
  @response(200, {
    description: 'TipoProducto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoProducto, {partial: true}),
        },
      },
    })
    tipoProducto: TipoProducto,
    @param.where(TipoProducto) where?: Where<TipoProducto>,
  ): Promise<Count> {
    return this.tipoProductoRepository.updateAll(tipoProducto, where);
  }

  @get('/tipo-productos/{id}')
  @response(200, {
    description: 'TipoProducto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TipoProducto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TipoProducto, {exclude: 'where'}) filter?: FilterExcludingWhere<TipoProducto>
  ): Promise<TipoProducto> {
    return this.tipoProductoRepository.findById(id, filter);
  }

  @patch('/tipo-productos/{id}')
  @response(204, {
    description: 'TipoProducto PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoProducto, {partial: true}),
        },
      },
    })
    tipoProducto: TipoProducto,
  ): Promise<void> {
    await this.tipoProductoRepository.updateById(id, tipoProducto);
  }

  @put('/tipo-productos/{id}')
  @response(204, {
    description: 'TipoProducto PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tipoProducto: TipoProducto,
  ): Promise<void> {
    await this.tipoProductoRepository.replaceById(id, tipoProducto);
  }

  @del('/tipo-productos/{id}')
  @response(204, {
    description: 'TipoProducto DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tipoProductoRepository.deleteById(id);
  }
}
