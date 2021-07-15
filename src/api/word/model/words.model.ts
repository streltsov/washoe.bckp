import { prop } from '@typegoose/typegoose';

export class Word {
  @prop({ required: true })
  word?: string;

  @prop({ required: false })
  meaning?: string;

  @prop({ required: false })
  example?: string;

  @prop({ required: true })
  createdAt?: number;

  @prop({ required: true })
  notifyAt?: number;
}
