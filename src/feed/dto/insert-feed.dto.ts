import { string } from "joi"

export class InsertFeedDto {
    title: string;
    text: string;
}