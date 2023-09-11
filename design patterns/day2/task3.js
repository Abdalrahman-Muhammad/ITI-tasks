class User {
  constructor(roles) {
    this.roles = roles;
  }

  hasRole(role) {
    return this.roles.includes(role);
  }

  addRole(role) {
    if (!this.hasRole(role)) {
      this.roles.push(role);
    }
  }

  removeRole(role) {
    const index = this.roles.indexOf(role);
    if (index !== -1) {
      this.roles.splice(index, 1);
    }
  }
}

class RoleChecker {
  constructor(user) {
    this.user = user;
  }

  checkRole(role) {
    return this.user.hasRole(role);
  }
}

const user = new User(["admin", "editor", "subscriber"]);
const roleChecker = new RoleChecker(user);

console.log(roleChecker.checkRole("admin")); // true
console.log(roleChecker.checkRole("guest")); // false

user.addRole("guest");
console.log(roleChecker.checkRole("guest")); // true

user.removeRole("admin");
console.log(roleChecker.checkRole("admin")); // false
