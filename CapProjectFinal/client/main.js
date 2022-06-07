const reviewsContainer = document.querySelector('#reviews-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4005/api/reviews`

const reviewsCallback = ({ data: reviews }) => displayReviews(reviews)
const errCallback = err => console.log(err)

const getAllReviews = () => axios.get(baseURL).then(reviewsCallback).catch(errCallback)
const createReview = body => axios.post(baseURL, body).then(reviewsCallback).catch(errCallback)
const deleteReview = id => axios.delete(`${baseURL}/${id}`).then(reviewsCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let message = document.querySelector('#message')
    let rating = document.querySelector('input[name="rating"]:checked')
 
  


    let bodyObj = {
        name: name.value,
        message: message.value, 
        rating: rating.value,
 
    }

    createReview(bodyObj)

    name.value = ''
    message.value = ''
    rating.checked = false
 
}

function createReviewCard(review) {
    const reviewCard = document.createElement('div')
    reviewCard.classList.add('review-card')

    reviewCard.innerHTML = `
    <div class ="container-result">
    <h2 class="address"><img src = "https://i.ibb.co/x6wwJZM/asfsdfasdfasfas.png" height="30px"> </br>Name: ${review.name}</h2>
    <div class="btns-container">
    <h2 class="review-price">Rating: ${review.rating} <img src="https://i.ibb.co/h9WJ7ty/star.png" height="20px" width="20px"></h2><h2>Review:</h2>"${review.message}"
    </div>
    <button onclick="deleteReview(${review.id})" class="btn">delete</button></div>
    `
     reviewsContainer.appendChild(reviewCard)
}

function displayReviews(arr) {
    reviewsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createReviewCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllReviews()