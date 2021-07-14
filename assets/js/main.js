var quoteElement = document.getElementById("quote")
var authorElement = document.getElementById("author")
var photoElement = document.getElementById("photo")

fetch('https://thatsthespir.it/api')
    .then(res => res.json())
    .then(data => {
        let author = data.author
        let photo = data.photo
        let quote = data.quote
        let gender = data.gender

        quoteElement.innerHTML = `<span class="quote-icon"><i class="fas fa-quote-left"></i></span> ${quote}`
        authorElement.innerText = author

        if (photo !== "") {
            photoElement.style.backgroundImage = `url("${photo}")`
        } else {
            photoElement.style.backgroundImage = `url("assets/img/${gender}.png")`
        }

        console.log(data)
    })
    .catch(reason => {
        alert("An error occured")
        console.error(reason)
    })