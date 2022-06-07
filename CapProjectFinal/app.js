const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const PORT = 4005
const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false })) 

const {
    getReviews,
    deleteReview, 
    createReview, 
} = require('./controller')

app.get(`/api/reviews`, getReviews)
app.delete(`/api/reviews/:id`, deleteReview)
app.post(`/api/reviews`, createReview)


app.listen(PORT, () => console.log(`running on 4005`))