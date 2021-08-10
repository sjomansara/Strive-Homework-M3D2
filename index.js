function mouseOver(color) {
    document.body.style.background = color
    document.body.classList.add("out")
}

function mouseOut() {
    document.body.style.background = "linear-gradient(180deg, rgb(83, 13, 4) 0%, rgb(0, 0, 0) 35%)"
    document.body.classList.remove("out")
}

// function removeCard (){
//     let getcard = document.querySelector(".card1")
//     getcard.remove()

// }

//create remove button on 1 card 
function removeButton () {
    //create new button elmement
    let removeButton = document.createElement("btn")  
    removeButton.classList.add("loveAgainButton")
    removeButton.classList.add("btn")
    removeButton.classList.add("btn-success")
    //target the parent container | of the love again card 
    let getParentCard = document.querySelector(".loveAgainCard")
    //append the button the the parent's container
    getParentCard.appendChild(removeButton)
} 

/* 
<div class="col-sm-6 col-md-4 col-lg-3">
<div class="card rounded border-0 text-white bg-dark mb-2" id="cardHover" onmouseover="mouseOver('linear-gradient(180deg, rgb(4, 83, 14) 0%, rgb(0, 0, 0) 35%)')" onmouseout="mouseOut()">
  <div class="row no-gutters">
    <div class="col-md-2">
      <img onclick="location.href='album.html'" id="imageSize" src="https://misc.scdn.co/liked-songs/liked-songs-300.png" class="rounded-left" alt="...">
    </div>
    <div class="col-md-10">
      <div class="card-body bodyHover">
        <h5 id="fontSize" class="card-title ml-3">Liked Songs</h5>
        <h6 class="card-title ml-3"><i class="fas fa-play-circle playHover"></i></h6>
      </div>
    </div>
  </div>
</div>
</div> */

function createNewCard () {
    // creating the outermost div and adding classes for it to be responsive

    let outermostDiv = document.createElement("div")
    outermostDiv.classList.add("col-sm-6")
    outermostDiv.classList.add("col-md-4")
    outermostDiv.classList.add("col-lg-3")

    //second outermost div
    let secondOutermostDiv = document.createElement("div")
    secondOutermostDiv.classList.add("card")
    secondOutermostDiv.classList.add("rounded")
    secondOutermostDiv.classList.add("border-0")
    secondOutermostDiv.classList.add("text-white")
    secondOutermostDiv.classList.add("bg-dark")
    secondOutermostDiv.classList.add("mb-2")
    secondOutermostDiv.setAttribute("id", "cardHover")
    secondOutermostDiv.setAttribute("onmousehover", "mouseOver('linear-gradient(180deg, rgb(28, 4, 83) 0%, rgb(0, 0, 0) 35%)')")
    secondOutermostDiv.setAttribute("onmouseout","mouseOut()")

    //append second outermost div into outermost Div
    outermostDiv.appendChild(secondOutermostDiv)

    //adding no-gutters div
    let noGutterDiv =   document.createElement("div")

    noGutterDiv.classList.add("row")
    noGutterDiv.classList.add("no-gutters")

    //append no-gutters Div into second outermost Div
    secondOutermostDiv.appendChild(noGutterDiv)

    //adding col-div
    let colDiv =   document.createElement("div")

    colDiv.classList.add("col-md-2")
    //adding img tag in col-div
    let createImg = document.createElement("img")
    colDiv.appendChild(createImg)

    //append col-div into no-gutters Div
    noGutterDiv.appendChild(colDiv)


    //create col-md-10 div
    let newCard =   document.createElement("div")

    newCard.classList.add("col-md-10")

    //innerdiv within the col-md-10-div 
    let newDiv =   document.createElement("div")

    newCard.appendChild(newDiv)
    newDiv.classList.add("card-body")
    newDiv.classList.add("bodyHover")
    
    //create h5 and h6 tag
    let h5Tag = document.createElement("h5")
    let h6Tag = document.createElement("h6")

    newDiv.appendChild(h5Tag)
    newDiv.appendChild(h6Tag)

    //setting id attributes into h5 and h6 tags
    h5Tag.setAttribute("id", "fontSize")
    h5Tag.classList.add("card-title")
    h5Tag.classList.add("ml-3")

    h6Tag.classList.add("card-title")
    h6Tag.classList.add("ml-3")

    //adding col-md-10 div into the no-gutter div
    noGutterDiv.appendChild(newCard)

    // target parent's container
    let goodMorningCardContainer = document.querySelector(".good-morning-cards")
    //append new card into parent's container
    goodMorningCardContainer.appendChild(outermostDiv)
}
