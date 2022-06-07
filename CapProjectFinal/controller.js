const reviews = require('./db')
let globalId = 4

module.exports = {
    getReviews: (req, res) => res.status(200).send(reviews),
    deleteReview: (req, res) => {
        let index = reviews.findIndex(elem => elem.id === +req.params.id)
        reviews.splice(index, 1)
        res.status(200).send(reviews)
    },
    createReview: (req, res) => {
        let { name, message, rating } = req.body
        let newReview = {
            id: globalId,
            name, 
            message,
            rating
            
            
        }
        reviews.push(newReview)
        res.status(200).send(reviews)
        globalId++
    },
  
}