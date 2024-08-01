import { Options } from '@mikro-orm/core';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config(); 

const mikroOrmConfig: Options = {
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  type: 'postgresql',
  dbName: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  migrations: {
    path: path.resolve(__dirname, './src/migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
};

export default mikroOrmConfig;
