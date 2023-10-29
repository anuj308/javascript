let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contest) => {
    console.log(contest)
    ihtml = " "
    for (item in contest) {
        console.log(contest[item])
        ihtml +=
            ` 
            <div class="cards" style="width: 20rem;">
                <img src="photo.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contest[item].name}</h5>
                    <p class="card-text">Status is ${contest[item].status}</p>
                    <p class="card-text">In 24 Hours?  ${contest[item].in_24_hours}</p>
                    <p class="card-text">Site is ${contest[item].site}</p>
                    <a href="${contest[item].url}" class="btn btn-primary">Vist Contest</a>
                    <p>Start at:${contest[item].start_time}</p>
                    <p>End at:${contest[item].end_time}</p>
                </div>
            </div>
        `
    }
    cards=document.getElementById("cards")
    cards.innerHTML= ihtml
})