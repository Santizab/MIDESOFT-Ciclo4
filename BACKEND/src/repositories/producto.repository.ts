import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Producto, ProductoRelations, TipoProducto} from '../models';
import {TipoProductoRepository} from './tipo-producto.repository';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id,
  ProductoRelations
> {

  public readonly tipoProducto: HasOneRepositoryFactory<TipoProducto, typeof Producto.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('TipoProductoRepository') protected tipoProductoRepositoryGetter: Getter<TipoProductoRepository>,
  ) {
    super(Producto, dataSource);
    this.tipoProducto = this.createHasOneRepositoryFactoryFor('tipoProducto', tipoProductoRepositoryGetter);
    this.registerInclusionResolver('tipoProducto', this.tipoProducto.inclusionResolver);
  }
}
