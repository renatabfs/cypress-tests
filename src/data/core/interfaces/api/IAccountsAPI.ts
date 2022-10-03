import Account from "../../domain/models/Acount";

abstract class IAccountsAPI {
    abstract fetch():Promise<Array<Account>>;
    abstract create(account: Account): Promise<void>
}

export default IAccountsAPI;