import Account from "../../domain/models/Acount";
import IAccountsAPI from "../api/IAccountsAPI";

abstract class IAccountsService {
    constructor(protected api: IAccountsAPI) {}
    abstract fetch():Promise<Array<Account>>;
    abstract create(account: Account): Promise<void>
}

export default IAccountsService;