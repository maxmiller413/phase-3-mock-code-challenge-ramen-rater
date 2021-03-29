// // - GET `/ramens`
// // - GET `/ramens/:id`
// // - PATCH `/ramens/:id`

// // **************** Deliverable 1 ****************
// // - See all ramen images in the `div` with the id of `ramen-menu`. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an an `img` tag inside the `#ramen-menu` div.

// - See all ramen images in the `div` with the id of `ramen-menu`
//  -  When the page loads, request the data from the server to get all the ramen objects.
//  - Then, display the image for each of the ramen using an an `img` tag inside the `#ramen-menu` div.

// 1) create variable for url
// 2) get request for all ramens
// 3) console.log data to confirm what data is
// 4) foreach over ramens to get one ramen
// 5) find ramen-menu and assign to variable
// 6) create img tag and assign img.src to one ramen.image (and img.alt to one ramen.name)
// 7) append

const url = 'http://localhost:3000/ramens'

fetch(url)
    .then(response => response.json())
    .then(ramenArr => {
        // console.log(ramenArr)
        ramenArr.forEach(oneRamen => {
            // console.log(oneRamen)

            const divRamenMenu = document.querySelector('div#ramen-menu')
            const img = document.createElement('img')
            img.src = oneRamen.image
            img.alt = oneRamen.name
            img.dataset.id = oneRamen.id
            divRamenMenu.append(img)
        })
    })

// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div, as well as the current rating and comment for the ramen displayed in the #ramen-rating form.

// Click on an image from the #ramen-menu div 
//  - see all the info about that ramen displayed inside the #ramen-detail div
//  - see the current rating and comment for the ramen displayed in the #ramen-rating form

const divRamenMenu = document.querySelector('div#ramen-menu')

divRamenMenu.addEventListener('click', event => {

    if(event.target.matches('img')){
        const id = event.target.dataset.id
        
        fetch(`${url}/${id}`)
            .then(response => response.json())
            .then(data => {

                const imgDetail = document.querySelector('img.detail-image')
                imgDetail.src = data.image
                imgDetail.alt = data.name

                const h2Detail = document.querySelector('h2.name')
                h2Detail.textContent = data.name

                const h3Detail = document.querySelector('h3.restaurant')
                h3Detail.textContent = data.restaurant
                
                const ratingForm = document.querySelector('form#ramen-rating')
                // console.log(ratingForm)
                ratingForm.dataset.id = event.target.dataset.id

                // ratingForm[0].value = data.rating
                ratingForm.rating.value = data.rating

                // ratingForm[1].value = data.comment
                ratingForm.comment.value = data.comment
            })
    }
})

// Update the rating and comment for a ramen. When the #ramen-rating form is submitted, it should update the value on the server. Changes should also be reflected on the frontend (you can test this by submitting the form; clicking a different ramen image; then clicking the image for the ramen you updated - you should see the rating and comment that you submitted previously).

//  Update the rating and comment for a ramen.
// When the #ramen-rating form is submitted, it should update the value on the server.
// Changes should also be reflected on the frontend (you can test this by submitting the form; clicking a different ramen image; then clicking the image for the ramen you updated - you should see the rating and comment that you submitted previously).

const ratingForm = document.querySelector('form#ramen-rating')

ratingForm.addEventListener('submit', event => {
    event.preventDefault()

    const updatedValues = {

        rating: event.target.rating.value,
        comment: event.target.comment.value
    }

    fetch(`${url}/${event.target.dataset.id}`, {

        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedValues)
    })
        // .then(response => response.json())
        // .then(data => {

        //     console.log(data)
        //     const ratingForm = document.querySelector('form#ramen-rating')
        //     ratingForm.rating.value = data.rating
        //     ratingForm.comment.value = data.comment
        // })
    
    // event.target.reset()

})










































// // - GET `/ramens`
// // - GET `/ramens/:id`
// // - PATCH `/ramens/:id`

// // **************** Deliverable 1 ****************
// // - See all ramen images in the `div` with the id of `ramen-menu`. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an an `img` tag inside the `#ramen-menu` div.

// // A) get request of ramen array
// // B) forEach over ramen array to target one ramen rest
// // C) save div#ramen-menu to global var
// // D) create img element
// // E) update img with src and id from db
// // F) append img to div


// const textareaComment = document.querySelector('textarea#comment')
// const inputRating = document.querySelector('input#rating')
// const formRating = document.querySelector('form#ramen-rating')
// const url = 'http://localhost:3000/ramens'
// // C) save div#ramen-menu to global var
// const divRaMenu = document.querySelector('div#ramen-menu')
// // A) get request of ramen array
// fetch(url)
//     .then(response => response.json())
//     .then(RamenArr => {
//         // B) forEach over ramen array to target one ramen rest
//         RamenArr.forEach(oneRamen => {
//             // D) create img element
//             const imgRamen = document.createElement('img')
//             // E) update img with src and id from db
//             imgRamen.src = oneRamen.image
//             imgRamen.alt = oneRamen.name
//             imgRamen.dataset.id = oneRamen.id
//             // F) append img to div
//             divRaMenu.append(imgRamen)
//         })
//     })

// // **************** Deliverable 2 ****************
// // - Click on an image from the `#ramen-menu` div and see all the info about that ramen displayed inside the `#ramen-detail` div, as well as the current rating and comment for the ramen displayed in the `#ramen-rating` form.
// // A) add event listener divRaMenu for click
// // B) if conditional on 'img'
// // C) fetch get for the id of the restaurant clicked
// // D) creat variables for ramen-detail, img, name, rest, rating, comment

// divRaMenu.addEventListener('click', event =>{
//     if(event.target.matches('img')){
//         // console.log(`${url}/${event.target.dataset.id}`)
//         fetch(`${url}/${event.target.dataset.id}`)
//             .then(response => response.json())
//             .then(oneRaRest => {
//                 const imgRaDetail = document.querySelector('img.detail-image')
//                 imgRaDetail.src = oneRaRest.image
//                 imgRaDetail.alt = oneRaRest.name

//                 const h2 = document.querySelector('h2.name')
//                 h2.textContent = oneRaRest.name

//                 const h3 = document.querySelector('h3.restaurant')
//                 h3.textContent = oneRaRest.restaurant

                
//                 formRating.dataset.id = oneRaRest.id

                
//                 // const inputRating = formRating[0].value
//                 formRating[0].value = oneRaRest.rating

                
//                 formRating[1].value = oneRaRest.comment
//                 // console.log(textareaComment)
//             })
//     }
// })

// // **************** Deliverable 3 ****************
// // - Update the rating and comment for a ramen. When the `#ramen-rating` form is submitted, it should update the value on the server. Changes should also be reflected on the frontend (you can test this by submitting the form; clicking a different ramen image; then clicking the image for the ramen you updated - you should see the rating and comment that you submitted previously).

// // A) add event listener submit on form#ramen-rating
// // B) fetch PATCH
// // C) target rating and comment input and update 

// formRating.addEventListener('submit', event => {
//     event.preventDefault()
//     console.log(event.target)

//     const updatedValues = {
//         rating: event.target.rating.value,
//         comment: event.target.comment.value
//     }
//     console.log(`${url}/${event.target.dataset.id}`)

//     fetch(`${url}/${event.target.dataset.id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': "application/json"
//         },
//         body: JSON.stringify(updatedValues)
//     })

// })









































// // - GET `/ramens`
// // - GET `/ramens/:id`
// // - PATCH `/ramens/:id`

// // ******************** Del1 ************************
// // - See all ramen images in the `div` with the id of `ramen-menu`. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an an `img` tag inside the `#ramen-menu` div.

// // A) create url var & fetch get request to get array of ramen rest
// const url = 'http://localhost:3000/ramens'
// const divRaMenu = document.querySelector('div#ramen-menu')
// const idForm = document.querySelector('form#ramen-rating')
// const inputRating = document.querySelector('input#rating')
// const textareaComment = document.querySelector('textarea#comment')
// console.log(idForm)

// fetch(url)
//     .then(response => response.json())
//     .then(ramenArr => {

// // console.log(ramenArr)

// // B) for each over array to get one restaurant
//         ramenArr.forEach(oneRamen => {

// // console.log(oneRamen)
// // C) create img tag for each restaurant
//         // - add src
//         // - add id
//             const imgRa = document.createElement('img')
// // console.log(imgRa)
//             imgRa.src = oneRamen.image
//             imgRa.dataset.id = oneRamen.id
// // console.log(imgRa.src)
// // console.log(imgRa.dataset.id)
// // D) append img to div
//             divRaMenu.append(imgRa)
//         })

//     })

// // ******************** Del2 ************************
// // - Click on an image from the `#ramen-menu` div and see all the info about that ramen displayed inside the `#ramen-detail` div, as well as the current rating and comment for the ramen displayed in the `#ramen-rating` form.

// // A) addeventlistener for click on div#ramen-menu
// divRaMenu.addEventListener('click', event =>{
// // -if conditional for img tag
//     if(event.target.matches('img')){
//  // B) get request to specific ramen rest based on click
//     // -create car for div#ramen-detail   
// // console.log('click', `${url}/${event.target.dataset.id}`)
//         fetch(`${url}/${event.target.dataset.id}`)
//             .then(response => response.json())
//             .then(clickRamen => {
// // C) create variables for img, name, restaurant, rating, comment
//     // - update each variable to db
//                 const imgDetail = document.querySelector('img.detail-image')
//                 imgDetail.src = clickRamen.image
                
//                 const h2 = document.querySelector('h2.name')
//                 h2.textContent = clickRamen.name
                
//                 const h3 = document.querySelector('h3.restaurant')
//                 h3.textContent = clickRamen.restaurant

//                 // moved idForm querySelector to global
//                 idForm.dataset.id = clickRamen.id

                
//                 // moved inputRating querySelector to global
//                 inputRating.value = clickRamen.rating

//                 // moved textareaComment querySelector to global
                
//                 textareaComment.textContent = clickRamen.comment
//             })
        
//     }

// })

// // ******************** Del3 ************************
// // - Update the rating and comment for a ramen. When the `#ramen-rating` form is submitted, it should update the value on the server. Changes should also be reflected on the frontend (you can test this by submitting the form; clicking a different ramen image; then clicking the image for the ramen you updated - you should see the rating and comment that you submitted previously)

// // 1) addeventlistener to form for submit
// // 2) fetch - patch
// // 3) then

// idForm.addEventListener('submit', event =>{
//     event.preventDefault()

//     // console.log(`${url}/${event.target.dataset.id}`, 'submit click')
//     fetch(`${url}/${event.target.dataset.id}`, {

//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//             rating: inputRating.value,
//             comment: textareaComment.value
//         })
//     })
//     .then(response => response.json())
//     .then(updatedRamen => {

//         console.log(updatedRamen)
//         inputRating.value = updatedRamen.rating
//         textareaComment.value = updatedRamen.comment
//         console.log(inputRating.value)
//         console.log(textareaComment.value)
//     })
//     event.target.reset()

// })










































// const url = 'http://localhost:3000/ramens'

// const divRamenMenu = document.querySelector('div#ramen-menu')
// const divRamenDetail = document.querySelector('div#ramen-detail')
// const imgRamenDetail = document.querySelector('img.detail-image')
// // console.log(imgRamenDetail)

// fetch(url)
//     .then(response => response.json())
//     .then(ramenArr => {

//         // console.log(ramenArr)

//         ramenArr.forEach(ramen => {

//             const img = document.createElement('img')
//             img.src = ramen.image
//             img.dataset.id = ramen.id
//             // console.log(img.dataset.id)

//             // h2 = document.createElement('h2')
//             // h2.textContent = `${ramen.name}`
//             // h3 = document.createElement('h3')
//             // h3.textContent = `${ramen.restaurant}`
//             // h4 = document.createElement('h4')
//             // h4.textContent = `${ramen.rating}`

//             divRamenMenu.append(img)

//         })

//     })

//      divRamenMenu.addEventListener('click', event => {

//                 // console.log(event.target, 'click')
//                 if(event.target.matches('img')){

//                     // console.log(event.target)
                    
//                     fetch(`${url}/${event.target.dataset.id}`)
//                         .then(response => response.json())
//                         .then(data => {

//                             // console.log(data)

//                             const imgRamenDetail = document.querySelector('img.detail-image')
//                             // console.log(imgRamenDetail)
//                             imgRamenDetail.src = data.image


//                             const h2 = document.querySelector('h2.name')
//                             // console.log(h2)
//                             h2.textContent = data.name 
//                             const h3 = document.querySelector('h3.restaurant')
//                             // console.log(h3)
//                             h3.textContent = data.restaurant

//                             const ramenRating = document.querySelector('form#ramen-rating input#rating').value

//                             console.log(ramenRating)

//                             ramenRating.textContent = data.rating
            

//                             console.log(ramenRating.textContent = data.rating)
                            
                            

                            


//                             // ramenRating.textContent = data.rating
//                         })
                        
//                 } 


//             })














// function renderAllRamen(ramenArr){

//     ramenArr.forEach(ramen => {

//         renderOneRamen(ramen)
//     })

// }

// function renderOneRamen(ramen){

//         console.log(ramen)

//         divRamenMenu.innerHTML= `<img src='${ramen.image}' >
//         <img src='${ramen.image}' >
//         <img src='${ramen.image}' >
//         <img src='${ramen.image}' >
//         <img src='${ramen.image}' >`

// }


// 1) get request for all images
// 2) const for div#ramen-menu
// 3) foreach data response from get
// 4) const img 
// 5) add dataset & id to img
// 6) append img to div

// const divRamenMenu = document.querySelector('div#ramen-menu')
// // console.log(divRamenMenu)
// const urlRamen = 'http://localhost:3000/ramens'
// // console.log(urlRamen)

// fetch(urlRamen)
//     .then(response => response.json())
//     .then(ramenArr => {
//         // console.log(ramenArr)
//         ramenArr.forEach(ramen => {

//             // console.log(ramen)
//             const imgRamen = document.createElement('img')
//             console.log(imgRamen)
//             imgRamen.src = `${ramen.image}`
//             console.log(imgRamen.src)
//             imgRamen.dataset.id = ramen.id
//             console.log(imgRamen.dataset.id)
//             divRamenMenu.append(imgRamen)
            

//         })
    
//     })



