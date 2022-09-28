import { createContext } from "react"
import Account from "../../../data/core/domain/models/Acount";

interface Props {
    data?: Array<Account>
    fetch(): Promise <void>
}

export const AccountsCTX = createContext({} as Props);