import { Address } from './address';

export class Group {

  constructor(
    public name: string,
    public addresses: Address[]
  ) {}
}
