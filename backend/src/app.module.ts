import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'chaienkhongmap',
      password: '',
      database: 'myapp',
      autoLoadEntities: true,
      synchronize: true,
    }),
    RedisModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
