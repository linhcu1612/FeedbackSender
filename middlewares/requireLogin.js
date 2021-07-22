/** @format */

module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "Not logged in" });
  }
  next();
};
