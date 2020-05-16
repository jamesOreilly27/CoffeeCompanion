import { Login } from '../components'

export const checkLoggedIn = (user, component) => {
  if(user) return component
  else return <Login />
}
