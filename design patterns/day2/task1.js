class AuthenticationService {
  constructor(userRepository, tokenValidator) {
    this.userRepository = userRepository;
    this.tokenValidator = tokenValidator;
  }

  authenticate(request) {
    const { username, token } = request;

    //validate token
    if (!this.tokenValidator.validateToken(token)) return false;
    //get user by username
    const user = this.userRepository.getUserByUsername(username);
    if (!user) return false;

    return `${username} is authenticated`;
  }
}

class UserRepository {
  getUserByUsername(username) {
    if (username) return true;
  }
  updateUserToken(username, token) {}
}
class TokenValidator {
  validateToken(token) {
    // const token = true;
    return token ? true : false;
  }
}
const userRepository = new UserRepository();
const tokenValidator = new TokenValidator();
const authenticateService = new AuthenticationService(
  userRepository,
  tokenValidator
);
const request = {
  username: "Ahmed",
  token: true,
};
const isAuthenticated = authenticateService.authenticate(request);
console.log(isAuthenticated);
