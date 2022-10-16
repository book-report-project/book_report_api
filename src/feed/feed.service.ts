import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InsertFeedDto } from './dto/insert-feed.dto';
import { Feed } from './entities/feed.entitiy';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(Feed)  private readonly feeds: Repository<Feed>,
    ){}

    async getFeeds(): Promise<Feed[]> {
        try{
            const feeds = await this.feeds.find();
            return feeds;
        } catch (error) {
            return error;
        }
    }

    async insertFeed(insertFeedDto: InsertFeedDto): Promise<Feed> {
        const {title, text} = insertFeedDto;
        try{
            const newFeed = this.feeds.create({
                title,
                text
            });
            this.feeds.save(newFeed);
            return newFeed;
        } catch (error) {
            return error;
        }
    }
}
