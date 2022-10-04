import { BrowserRouter, Route, Routes } from "react-router-dom"
import AccountAPI from "./data/api/AccountAPI"
import AccountsProvider from "./ui/contexts/accounts/AccountsProvider"
import ListAccountPages from "./ui/pages/accounts/ListAccountPage/index"
import CreateAccountsPage from "./ui/pages/accounts/CreateAccountPage"

function App() {

  return (
    <AccountsProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <ListAccountPages />}/>
    <Route path="/accounts" element={ <ListAccountPages />}/>
    <Route path="/criar-conta" element= {<CreateAccountsPage />} />
    </Routes>
    </BrowserRouter>
    </AccountsProvider >

  )
}

export default App
