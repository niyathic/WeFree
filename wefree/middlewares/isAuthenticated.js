var isAuthenticated = function (req, res, next) {
    if (req.session.user) {
      next();
    } else {
      next(new Error('Unauthenticated user'));
    }
  }
  
  module.exports = isAuthenticated;