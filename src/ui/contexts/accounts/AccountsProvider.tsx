
import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import AccountAPI from "../../../data/api/AccountAPI";
import Account from "../../../data/core/domain/models/Acount";
import AccountService from "../../../data/core/services/AccountService";
import { AccountsCTX } from "./AccountsCTX";

function AccountsProvider({ children }: PropsWithChildren) {
    const [data, setData] = useState<Array<Account>>();
    const service = useMemo(() => new AccountService(new AccountAPI), []);

    const fetch = useCallback(async () => {
        try {
            const accounts = await service.fetch();
            setData(accounts);
        } catch (e) {
            console.error(e);
            setData([]);
        }
    }, []);

    const create = useCallback(async (account: Account): Promise<boolean>=> {
        try{
            await service.create(account)
            return true
        } catch(e) {
            console.error(e)
            return false
        }
    }, [])

    return (
        <AccountsCTX.Provider value={{ data, fetch, create}}>
            {children}
        </AccountsCTX.Provider>
    )
}

export default AccountsProvider;