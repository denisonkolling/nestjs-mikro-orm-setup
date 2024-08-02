import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  username!: string;

  @Property({ type: 'bigint' })
  document!: number;

  @Property()
  email!: string;
}
