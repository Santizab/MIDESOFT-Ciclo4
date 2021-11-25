import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {MetodoDePago, MetodoDePagoRelations} from '../models';

export class MetodoDePagoRepository extends DefaultCrudRepository<
  MetodoDePago,
  typeof MetodoDePago.prototype.id,
  MetodoDePagoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(MetodoDePago, dataSource);
  }
}
