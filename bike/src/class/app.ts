import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import 'crypto';

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    findUser(id: string): User | undefined {
        return this.users.find(user => user.id === id)
    }

    registerUser(user: User): void {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        user.id = crypto.randomUUID()
        this.users.push(user)
    }

    removeUser(email: string): void {
        const index = this.users.findIndex(user => user.email === email)
        if (index)
            this.users.splice(index, 1);
        else
            throw new Error('Cannot find User ')

    }

    findBike(id: string): Bike | undefined {
        return this.bikes.find(bike => bike.id === id)
    }

    registerBike(bike: Bike): void {
        for (const rBikes of this.bikes) {
            if (rBikes.name === bike.name) {
                throw new Error('Duplicate Bike')
            }
        }
        bike.id = crypto.randomUUID()
        this.bikes.push(bike)
    }

    rentBike(bikeId: string, userId: string, dateFrom: Date, dateTo: Date): void {
        const bike = this.findBike(bikeId);

        if (bike == undefined)
            throw new Error('Cannot find Bike')

        const user = this.findUser(userId);

        if (user == undefined)
            throw new Error('Cannot find User')

        const rent = Rent.create(this.rents, bike, user, dateFrom, dateTo)

        if (rent == undefined)
            throw new Error('Date unavailable')

        this.rents.push(rent)
    }

    findRent(id: string): Rent | undefined {
        return this.rents.find(rent => rent.id === id)
    }

    returnBike(rentId: string, dateReturned: Date) {
        const rent = this.findRent(rentId);

        if (rent == undefined)
            throw new Error('Cannot find Rent')

        rent.dateReturned = dateReturned;
    }
}