import { Word } from './words.model';
import { getModelForClass } from '@typegoose/typegoose';

export const WordModel = getModelForClass(Word);