import {Entity, model, property} from '@loopback/repository';

@model()
export class MetodoDePago extends Entity {
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
  nombre_de_mdp: number;


  constructor(data?: Partial<MetodoDePago>) {
    super(data);
  }
}

export interface MetodoDePagoRelations {
  // describe navigational properties here
}

export type MetodoDePagoWithRelations = MetodoDePago & MetodoDePagoRelations;
