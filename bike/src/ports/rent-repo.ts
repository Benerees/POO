import { Rent } from "../rent";

export interface RentRepo {
    findOpenRentsFor(userEmail: string): Promise<boolean>
    add(rent: Rent): Promise<string>
    findOpen(bikeId: string, userEmail: string): Promise<Rent>
    update(id: string, rent: Rent): Promise<void>
}