import React, { useCallback } from "react"
import {useNavigate} from 'react-router-dom'
import styles from '../ListAccountPage/styles.module.scss'

function CreateAccountsPage () {
    const navigate = useNavigate();
    const submit = useCallback ((event: React.FormEvent) => {
        event.preventDefault()

        console.log(event.currentTarget)
    },[])

    return (
        <div className={styles.container}>
            <header>
            <h1>Cadastrar nova conta</h1>
            <button onClick={() => navigate('/accounts')}>Ver contas cadastradas</button>
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