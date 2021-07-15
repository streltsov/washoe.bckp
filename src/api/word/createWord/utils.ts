import { INTERVALS } from '../../../constants';

// wordPropertyToLowerCase :: Object -> Object
export function wordPropertyToLowerCase<T extends { word: string }>(object: T): T {
  return { ...object, word: object.word.toLowerCase() }
}

// TODO make function addCreatedAtProp pure
export function addCreatedAtProp<T>(object: T): T & { createdAt: number } {
    return { ...object, createdAt: Date.now() };
}

// addZeroStageProp :: Object -> Object
export function addZeroStageProp<T>(object: T): T & { stage: number } {
    return { ...object, stage: 0 };
}

// addInitialNotifyAtProp :: Object -> Object
export function addInititalNotifyAtProp<T extends { createdAt: number }>(object: T): T & { notifyAt: number } {
    return { ...object, notifyAt: object.createdAt + INTERVALS[0] }
}

// TODO get rid of type any
// createResponseOnWordCreated :: MongoDocument -> Object
export function createResponseOnWordCreated(data: any): { message: string; success: boolean; } {
    return {
        message: `Word "${data.word.toLowerCase()}" successfully created!`,
        success: true,
    };
}