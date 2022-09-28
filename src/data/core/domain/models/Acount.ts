class Account {
    private _id?: number;
    private _name: string;
    private _birthDate: string;
    private _cpf: string;
    private _email: string;


    constructor() {
        this._id = 0;
        this._name = this._birthDate = this._cpf = this._email = '';
    }

    static fromJSON(json: Record<string, unknown>): Account {
        const obj = new Account();
        obj._id = Number(json["id"]);
        obj._name = String(json["data"]);
        obj._birthDate = String(json["birth_date"]);
        obj._cpf = String(json["cpf"]);
        obj._email = String(json["email"]);
        return obj;
    }
    toJSON() {
        const json: Record<string, unknown> = {};
        json['name'] = this.name;
        json['birth_date'] = this.birthDate;
        json['cpf'] = this.cpf;
        json['email'] = this.email;
        return json;
    }
    get id () {
        return this._id;
    }
    get name () {
        return this._name;
    }
    get email () {
        return this._email;
    }
    get birthDate () {
        return this._birthDate;
    }
    get cpf  () {
        return this._cpf;
    }

}


export default Account;