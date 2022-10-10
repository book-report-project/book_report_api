import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigAppModule } from './config/config.module';
import { TypeormModule } from './typeorm/typeorm.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [UserModule, ConfigAppModule, TypeormModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
