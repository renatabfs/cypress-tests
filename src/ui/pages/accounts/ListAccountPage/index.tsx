import { useContext, useEffect } from "react"
import { AccountsCTX } from "../../../contexts/accounts/AccountsCTX"
import styles from './styles.module.scss'
import {useNavigate} from 'react-router-dom'

function ListAccountPages ( ) {
    const navigate = useNavigate ();
    const {data: accounts, fetch: fetchAccounts} = useContext(AccountsCTX)
    useEffect(() => {
        if (fetchAccounts) {
            fetchAccounts()
        }
    }, []
    )
    console.log(accounts)
    return (
        
        <div className={styles.container}>
        <header>
        <h1>Lista de contas</h1>
        <button onClick={() => navigate('/criar-conta')}>criar conta</button>
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