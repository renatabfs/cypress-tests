import Account from "../../domain/models/Acount";
import IAccountsAPI from "../api/IAccountsAPI";

abstract class IAccountsService {
    constructor(protected api: IAccountsAPI) {}
    abstract fetch():Promise<Array<Account>>;
}

export default IAccountsService;