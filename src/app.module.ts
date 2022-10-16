import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeormModule } from './typeorm/typeorm.module';
import { BookModule } from './book/book.module';
import { FeedModule } from './feed/feed.module';
import { ConfigAppModule } from './config/config.module';

@Module({
  imports: [
    ConfigAppModule,TypeormModule,UserModule, BookModule, FeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
