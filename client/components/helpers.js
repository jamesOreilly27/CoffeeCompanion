import { Login } from '../components'

export const checkLoggedIn = (user, component) => {
  if(user) return component
  else return <Login />
}

export const nameToUrl = name => {
  let urlEnding = ''
  for(let i = 0; i < name.length; i++) {
    if(name[i] === " ") {
      urlEnding += '-'
    } else {
      urlEnding += name[i]
    }
  }
  return urlEnding.toLowerCase()
}

export const urlToName = urlEnding => {
  let name = ''
  for(let i = 0; i < urlEnding.length; i++) {
    if(urlEnding[i] === "-") {
      name += ' '
    } else {
      name += urlEnding[i]
    }
  }
  return name.toUpperCase()
}
