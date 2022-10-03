import AccountAPI from "../../api/AccountAPI";
import Account from "../domain/models/Acount";
import IAccountsService from "../interfaces/services/IAccountsService";

class AccountService extends IAccountsService {
    fetch(): Promise<Account[]> {
       return this.api.fetch()

    } 
    create(account: Account): Promise<void> {
       return this.api.create(account)
    } 
}

export default AccountService;