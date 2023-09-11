import { Bike } from "./bike";
import { User } from "./user";
import crypto from 'crypto'

export class Rent {

    private constructor(
        public bike: Bike,
        public user: User,
        public start: Date,
        public end?: Date,
        public id?: string,
        public price?: number
    ) { }

    static create(bike: Bike, user: User,
        startDate: Date, endDate: Date): Rent | undefined {
        return new Rent(bike, user, startDate, endDate, crypto.randomUUID())
    }

}

