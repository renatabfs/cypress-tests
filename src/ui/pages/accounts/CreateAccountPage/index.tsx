import React, { useCallback } from "react"
import {useNavigate} from 'react-router-dom'
import styles from '../ListAccountPage/styles.module.scss'
import Account from '../../../../data/core/domain/models/Acount'

function CreateAccountsPage () {
    const navigate = useNavigate();
    const submit = useCallback ((event: React.FormEvent) => {
        event.preventDefault()

        const inputs = event.currentTarget.getElementsByTagName('input')
        const data: Record<string, string>= {}

        for (const input of inputs) {
            data[input.name] = input.value
        }

        if(Object.values(data).some(item => item === "")) {
            alert('você precisa preencher todos os campos do formulário')
            return
        }

        const account = Account.fromForm(data)

        console.log(account)
    },[])

    return (
        <div className={styles.container}>
            <header>
            <h1>Cadastrar nova conta</h1>
            <button onClick={() => navigate('/')}>Ver contas cadastradas</button>
            </header>
            <form onSubmit={submit}>
                <fieldset>
                    <legend>Dados gerais</legend>
                    <div>
                    <label>Nome <input name="name"></input></label>
                    </div>
                    <div>
                    <label>Data de nascimento <input  type='date'name="birth_date"></input></label>
                    </div>
                    <div>
                    <label>Cpf <input type = "number" name="cpf"></input></label>
                    </div>
                    <div>
                    <label>Email <input type= 'email' name="email"></input></label>
                    </div>
                    <button type="submit">
                        Finalizar
                    </button>
                </fieldset>
            </form>
        </div>
    )
}
export default CreateAccountsPage