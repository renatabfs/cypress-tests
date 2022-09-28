import AccountAPI from "../../api/AccountAPI";
import Account from "../domain/models/Acount";
import IAccountsService from "../interfaces/services/IAccountsService";

class AccountService extends IAccountsService {
    fetch(): Promise<Account[]> {
       return this.api.fetch()
    } 

}

export default AccountService;