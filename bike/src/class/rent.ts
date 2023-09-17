import { Bike } from "./bike";
import { User } from "./user";
import crypto from 'crypto'

export class Rent {
    public end: Date = undefined
    
    private constructor(
        public bike: Bike,
        public user: User,
        public start: Date,
        public id?: string,
        public price?: number
    ) { }

    static create(bike: Bike, user: User,
        startDate: Date): Rent | undefined {
        return new Rent(bike, user, startDate, crypto.randomUUID())
    }

}

