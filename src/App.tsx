import AccountAPI from "./data/api/AccountAPI"
import AccountsProvider from "./ui/contexts/accounts/AccountsProvider"
import ListAccountPages from "./ui/pages/accounts/ListAccountPages"

function App() {

  return (
    <AccountsProvider>
      <ListAccountPages />
      </AccountsProvider >
  )
}

export default App
