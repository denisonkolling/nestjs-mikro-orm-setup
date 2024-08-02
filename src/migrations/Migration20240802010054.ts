import { Migration } from '@mikro-orm/migrations';

export class Migration20240802010054 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_document_check";');
    this.addSql('alter table "user" alter column "document" type bigint using ("document"::bigint);');
  }

}
