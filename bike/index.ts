import { App } from "./src/class/app";
import { Bike } from "./src/class/bike";
import { Rent } from "./src/class/rent";
import { User } from "./src/class/user";
import sinon from 'sinon'

async function main() {
    const clock = sinon.useFakeTimers();
    const app = new App()
    const user1 = new User('Jose', 'jose@mail.com', '1234')
    await app.registerUser(user1)
    const bike = new Bike('caloi mountainbike', 'mountain bike',
        1234, 1234, 100.0, 'My bike', 5, [], 37.7749, -122.4194)
    app.registerBike(bike)
    console.log('Bike disponível: ', bike.available)
    app.rentBike(bike.id, user1.email)
    console.log('Bike disponível: ', bike.available)
    clock.tick(1000 * 60 * 65)
    console.log(app.returnBike(bike.id, user1.email, 40.7128, -74.0060))
    console.log('Bike disponível: ', bike.available)
}

main()








