import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigAppModule } from './config/config.module';
import { TypeormModule } from './typeorm/typeorm.module';
import { BookModule } from './book/book.module';
import { FeedService } from './feed/feed.service';
import { FeedController } from './feed/feed.controller';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [UserModule, ConfigAppModule, TypeormModule, BookModule, FeedModule],
  controllers: [FeedController],
  providers: [FeedService],
})
export class AppModule {}
