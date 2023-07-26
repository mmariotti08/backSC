const postReviewHandler = require('../../handlers/reviewsHandlers/postReviewHandler')

const postReview = async (req, res) => {
  const { rating, opinion, UserId, ProductId } = req.body
  try {
    const review = await postReviewHandler(rating, opinion, UserId, ProductId )
    return res.json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = { postReview }