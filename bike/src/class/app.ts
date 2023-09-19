import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import crypto from 'crypto'
import bcrypt from 'bcrypt';
import { Location } from "./location";

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    listUser(): User[] {
        return this.users;
    }

    listRent(): Rent[] {
        return this.rents;
    }

    listBikes(): Bike[] {
        return this.bikes;
    }

    findUser(email: string): User {
        return this.users.find(user => user.email === email)
    }

    registerUser(user: User): string {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        const newId = crypto.randomUUID()
        user.id = newId
        user.password = bcrypt.hash(user.password, 1);
        console.log(user.password);
        this.users.push(user)
        return newId
    }

    registerBike(bike: Bike): string {
        const newId = crypto.randomUUID()
        bike.id = newId
        this.bikes.push(bike)
        return newId
    }

    removeUser(email: string): void {
        const userIndex = this.users.findIndex(user => user.email === email)
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1)
            return
        }
        throw new Error('User does not exist.')
    }

    rentBike(bikeId: string, userEmail: string): void {
        const bike = this.bikes.find(bike => bike.id === bikeId)
        if (!bike) {
            throw new Error('Bike not found.')
        }
        if (bike.available == false) {
            throw new Error('Bike is not available')
        }

        const user = this.findUser(userEmail)
        if (!user) {
            throw new Error('User not found.')
        }

        const now = new Date();

        bike.available = false;

        const newRent = Rent.create(bike, user, now)

        this.rents.push(newRent)
    }

    moveBikeTo(bikeId: string, location: Location) {
        const bike = this.bikes.find(bike => bike.id === bikeId)
        
        if(!bike) throw new Error('Bike not found.')

        bike.location.latitude = location.latitude
        bike.location.longitude = location.longitude
    }

    returnBike(bikeId: string, userEmail: string, location: Location) {
        const now = new Date()
        const rent = this.rents.find(rent =>
            rent.bike.id === bikeId &&
            rent.user.email === userEmail &&
            rent.bike.available === false
        )
        if (!rent) throw new Error('Rent not found.')

        this.moveBikeTo(bikeId, location);

        rent.bike.available = true
        rent.end = now
        rent.price = this.diffHours(rent.end, rent.start) * rent.bike.rate

        return rent.price
    }

    diffHours(dt2: Date, dt1: Date): number {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60);
        return Math.abs(Math.round(diff));
    }
}
