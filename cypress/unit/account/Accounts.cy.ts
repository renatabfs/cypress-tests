import Account from '../../../src/data/core/domain/models/Acount'

describe ("Account", () => {

    it("Should create a empy account when using the normal constructor", () => {
        const account = new Account();

        expect(account.id).undefined
        expect(account.name).empty
        expect(account.birthDate).empty
        expect(account.email).empty
        expect(account.cpf).empty
    })

    it('should crate an account when passing a valid json to fromJSON factory', () =>{
        const data = {
            id: 1,
            name: 'Renata',
            birthDate: "1990-01-01",
            cpf: "123456",
            email: "renata@gmail.com" 
        };
        const account = Account.fromJSON(data);

        expect(account.id).eq(data['id'])
        expect(account.name).eq(data['name'])
        expect(account.birthDate).eq(data['birthDate'])
        expect(account.cpf).eq(data['cpf'])
        expect(account.email).eq(data['email'])
   '' })
});