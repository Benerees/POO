import { App } from "./src/class/app";
import { Bike } from "./src/class/bike";
import { Rent } from "./src/class/rent";
import { User } from "./src/class/user";
import sinon from 'sinon'
import { Location } from "./src/class/location";

async function main() {
    const clock = sinon.useFakeTimers();
    const app = new App()
    const user1 = new User('Jose', 'jose@mail.com', '1234')
    await app.registerUser(user1)
    const local = new Location(37.7749, -122.4194);
    const bike = new Bike('caloi mountainbike', 'mountain bike',
        1234, 1234, 100.0, 'My bike', 5, [], local)
    app.registerBike(bike)
    console.log('Bike disponível: ', bike.available)
    app.rentBike(bike.id, user1.email)
    console.log('Bike disponível: ', bike.available)
    clock.tick(1000 * 60 * 65)
    local.latitude = 40.7128
    local.longitude = -74.0060 
    console.log(app.returnBike(bike.id, user1.email, local))
    console.log('Bike disponível: ', bike.available)
}

main()








