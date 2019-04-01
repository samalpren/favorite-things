const container = document.querySelector("#wishList")

document.querySelector("#saveToWishList").addEventListener("click", event => {  
    
   console.log("click")
    const favoriteItem = document.querySelector("#favThing").value;
    console.log(favoriteItem)
  
    const favoriteStore = document.querySelector("#favStore").value;
    console.log(favoriteStore)

    container.innerHTML +=`
        <section>
            <h1>I can purchase ${favoriteItem} at ${favoriteStore}</h1>
        </section>
    `;

});