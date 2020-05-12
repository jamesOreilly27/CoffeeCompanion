const chooseAuthType = (email, password, isSignup, firstName, lastName, userModel, request) => {
  let authType
  isSignup ?
    authType = userModel.create({
      email: email,
      password: password,
      isSignup: isSignup,
      firstName: firstName,
      lastName: lastName
    })
    .then(user => {
      request.login(user, error => error ? error : user)
      return true
    })
    .catch(err => console.log(err))
  :
    authType = userModel.findOne({ where: { email: email}})
    .then(user => {
      if(!user) {
        throw new Error('invalid credentials')
      } else if(!user.correctPassword(password)) {
        throw new Error('invalid credentials')
      } else {
        request.login(user, error => error ? error : user)
        return true
      }
    })
    console.log('FIRING', request.user)

    return authType
}

module.exports = { chooseAuthType }
