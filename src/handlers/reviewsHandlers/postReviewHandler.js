const { Reviews } = require('../../db')

const postReviewHandler = async (rating, opinion, UserId, ProductId ) => {
  try {
    const reviewAux = await Reviews.create({ rating, opinion, UserId, ProductId })
    return reviewAux
  } catch (error) {
    return error.message
  }
}

module.exports = postReviewHandler