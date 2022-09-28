import Account from "../core/domain/models/Acount";
import IAccountsAPI from "../core/interfaces/api/IAccountsAPI";
import { BackEndClient } from "./BackEndClient";

class AccountAPI extends IAccountsAPI{
    async fetch(): Promise<Account[]> {
        const response = await BackEndClient.get<Array<Record<string,unknown>>>(
            "/accounts");

        return response.data.map(Account.fromJSON);
    
        throw new Error("Method not implemented.");
    }
}


export default AccountAPI;