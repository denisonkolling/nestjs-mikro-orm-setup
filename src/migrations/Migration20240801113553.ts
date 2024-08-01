import { Migration } from '@mikro-orm/migrations';

export class Migration20240801113553 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "document" int4 not null, add column "email" varchar(255) not null;');
  }

}
