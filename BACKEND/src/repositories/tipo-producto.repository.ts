import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {TipoProducto, TipoProductoRelations} from '../models';

export class TipoProductoRepository extends DefaultCrudRepository<
  TipoProducto,
  typeof TipoProducto.prototype.id,
  TipoProductoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(TipoProducto, dataSource);
  }
}
