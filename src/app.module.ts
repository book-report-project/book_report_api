import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigAppModule } from './config/config.module';
import { TypeormModule } from './typeorm/typeorm.module';

@Module({
  imports: [UserModule, ConfigAppModule, TypeormModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
