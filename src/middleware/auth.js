const { verifyToken } = require('../helpers/token');

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();
    const tokenData = await verifyToken(token);

    if(tokenData.id) {
      next()
    }else {
      res.status(409)
      res.send({error:'Please log in to have access to this page.'})
    }
  } catch (error) {
    res.status(409)
    res.send({error:'Please log in to have access to this page.'})
  }
}

module.exports = { checkAuth }