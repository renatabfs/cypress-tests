import { useContext, useEffect } from "react"
import { AccountsCTX } from "../../contexts/accounts/AccountsCTX"

function ListAccountPages ( ) {
    const {data: accounts, fetch: fetchAccounts} = useContext(AccountsCTX)
    useEffect(() => {
        if (fetchAccounts) {
            fetchAccounts()
        }
    }, []
    )
    console.log(accounts)
    return (
        
        <div>
        <header>
        <h1>List account page</h1>
        <button>criar conta</button>
        </header>
        <table border = {1}>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Data de nascimento</th>
                <th>e-mail</th>
                <th>CPF</th>
                    </tr>
            </thead>
            <tbody>
                {accounts?.map(account => (
                    <tr key={account.id}>
                        <td>{account.id}</td>
                        <td>{account.name}</td>
                        <td>{account.birthDate}</td>
                        <td>{account.cpf}</td>
                        <td>{account.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)}

export default ListAccountPages