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
import {MetodoDePago} from '../models';
import {MetodoDePagoRepository} from '../repositories';

export class MetodoDePagoController {
  constructor(
    @repository(MetodoDePagoRepository)
    public metodoDePagoRepository : MetodoDePagoRepository,
  ) {}

  @post('/metodos-de-pago')
  @response(200, {
    description: 'MetodoDePago model instance',
    content: {'application/json': {schema: getModelSchemaRef(MetodoDePago)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MetodoDePago, {
            title: 'NewMetodoDePago',
            exclude: ['id'],
          }),
        },
      },
    })
    metodoDePago: Omit<MetodoDePago, 'id'>,
  ): Promise<MetodoDePago> {
    return this.metodoDePagoRepository.create(metodoDePago);
  }

  @get('/metodos-de-pago/count')
  @response(200, {
    description: 'MetodoDePago model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MetodoDePago) where?: Where<MetodoDePago>,
  ): Promise<Count> {
    return this.metodoDePagoRepository.count(where);
  }

  @get('/metodos-de-pago')
  @response(200, {
    description: 'Array of MetodoDePago model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MetodoDePago, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MetodoDePago) filter?: Filter<MetodoDePago>,
  ): Promise<MetodoDePago[]> {
    return this.metodoDePagoRepository.find(filter);
  }

  @patch('/metodos-de-pago')
  @response(200, {
    description: 'MetodoDePago PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MetodoDePago, {partial: true}),
        },
      },
    })
    metodoDePago: MetodoDePago,
    @param.where(MetodoDePago) where?: Where<MetodoDePago>,
  ): Promise<Count> {
    return this.metodoDePagoRepository.updateAll(metodoDePago, where);
  }

  @get('/metodos-de-pago/{id}')
  @response(200, {
    description: 'MetodoDePago model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MetodoDePago, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(MetodoDePago, {exclude: 'where'}) filter?: FilterExcludingWhere<MetodoDePago>
  ): Promise<MetodoDePago> {
    return this.metodoDePagoRepository.findById(id, filter);
  }

  @patch('/metodos-de-pago/{id}')
  @response(204, {
    description: 'MetodoDePago PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MetodoDePago, {partial: true}),
        },
      },
    })
    metodoDePago: MetodoDePago,
  ): Promise<void> {
    await this.metodoDePagoRepository.updateById(id, metodoDePago);
  }

  @put('/metodos-de-pago/{id}')
  @response(204, {
    description: 'MetodoDePago PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() metodoDePago: MetodoDePago,
  ): Promise<void> {
    await this.metodoDePagoRepository.replaceById(id, metodoDePago);
  }

  @del('/metodos-de-pago/{id}')
  @response(204, {
    description: 'MetodoDePago DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.metodoDePagoRepository.deleteById(id);
  }
}
