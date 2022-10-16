import { Body, Controller, Get, Post } from '@nestjs/common';
import { InsertFeedDto } from './dto/insert-feed.dto';
import { Feed } from './entities/feed.entitiy';
import { FeedService } from './feed.service';

@Controller('feed')
export class FeedController {
    constructor(private readonly feedService: FeedService) {} 

    @Get() 
    async getFeed(): Promise<Feed[]> {
        return await this.feedService.getFeeds();
    }

    @Post() 
    async insertFeed(
        @Body() insertFeedDto: InsertFeedDto
    ): Promise<Feed> {
        console.log(insertFeedDto);
        return await this.feedService.insertFeed(insertFeedDto);
    }
}
