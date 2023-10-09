export class RentOpenError extends Error {
    public readonly name = 'RentOpenError'

    constructor() {
        super('Rent open.')
    }
}