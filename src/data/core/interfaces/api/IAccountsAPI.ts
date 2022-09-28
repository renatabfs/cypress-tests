import Account from "../../domain/models/Acount";

abstract class IAccountsAPI {
    abstract fetch():Promise<Array<Account>>;
}

export default IAccountsAPI;