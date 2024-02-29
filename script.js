document.querySelector(".open").addEventListener("click", function () {
    document.querySelector(".card").style.top = "0%"
})
document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".card").style.top = "-100%"
})



var products = [
    {
        productUrl: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productName: "Apple iPhone 14 (Starlight, 128 GB)",
        ProductStatus: "2,79,315 Ratings & 10,986 Reviews",
        price: 56999,
        category: "Phone",
        addToCart: false
    },

    {
        productUrl: "https://images.unsplash.com/photo-1673718424091-5fb734062c05?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productName: "OnePlus Nord 2T 5G (Gray Shadow, 128 GB)",
        ProductStatus: "13,125 Ratings & 1,036 Reviews",
        price: 28199,
        category: "Phone",
        addToCart: false
    },
    {
        productUrl: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productName: "boAt Rockerz 460 with upto 30 Hours Playback",
        ProductStatus: "4,562 Ratings & 427 Reviews",
        price: 1799,
        category: "Earphones",
        addToCart: false
    },
    {
        productUrl: "https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productName: "Apple iPhone X (White, 256 GB)",
        ProductStatus: "10,968 Ratings & 864 Reviews",
        price: 106900,
        category: "Phone",
        addToCart: false
    },
    {
        productUrl: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productName: "boAt Rockerz 425 w/ 25 hrs Playtime",
        ProductStatus: "795 Ratings & 64 Reviews",
        price: 1499,
        category: "Earphones",
        addToCart: false
    },
    {
        productUrl: "https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productName: "Fire-Boltt Rise BT Calling,1.85",
        ProductStatus: "41,042 Ratings & 6,168 Reviews",
        price: 1399,
        category: "Smart Watch",
        addToCart: false
    },
    {
        productUrl: "https://images.unsplash.com/photo-1620226054624-5f49d1d66e5b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productName: "Fastrack Revoltt FS1 (Gun Black Strap, Free Size)",
        ProductStatus: "1,53,284 Ratings & 12,721 Reviews",
        price: 1499,
        category: "Smart Watch",
        addToCart: false
    },
    {
        productUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productName: "Fire-Boltt Ninja Calling Pro Plus ",
        ProductStatus: "2,49,177 Ratings & 38,012 Reviews",
        price: 1499,
        category: "Smart Watch",
        addToCart: false
    },

]

function showProd() {
    clutter = ""
    products.forEach(function (prod) {
        clutter += `<div class="product p-3 w-full sm:w-64 bg-zinc-800">
     <div class="w-full h-52 overflow-hidden">
         <img class="w-full h-full object-cover object-center" src="${prod.productUrl}" alt="">
     </div>
     <h3 class="capitalize text-xl ">${prod.productName}</h3>
     <p class="text-sm text-zinc-500">${prod.ProductStatus}</p>
     <h4 class="text-lg mt-4 ">₹<span class="price">${prod.price}</span> <span class="text-sm line-through text-zinc-500">₹${prod.price * 2}</span></h4>
     <button data-index="${prod.productUrl}" class="add p-3 py-2 bg-blue-600 rounded w-full mt-1 hover:bg-blue-800">ADD TO CART</button>
 </div>`
    })

    document.querySelector("#container").innerHTML = clutter
}



function addToCart() {
    document.querySelector("#container").addEventListener("click", function (dets) {
        if (dets.target.classList.contains("add")) {
            var idx = products.findIndex(elem => elem.productUrl === dets.target.dataset.index)
            products[idx].addToCart = true
            updateCart()
        }
    })
}

function updateCart() {
    var filterArr = products.filter(prod => prod.addToCart === true)
    var clutter2 = ""
    var total = 0
    filterArr.forEach(function (item) {
        clutter2 += `<div class="CartProduct p-3 bg-zinc-700 w-40 rounded shrink-0">
<div class="w-full h-32  overflow-hidden rounded">
 <img class="w-full h-full object-cover" src="${item.productUrl}" alt="">
</div>
<h4 class="capitalize font-semibold text-md">${item.ProductStatus}</h4>
<h4 class="text-lg mt-4 ">₹<span class="price">${item.price}</span> <span class="text-sm line-through text-zinc-500">₹${item.price * 2}</span></h4>
<button data-id="${item.productUrl}" class="remove p-3 py-1 w-full bg-red-800 rounded mt-1">Remove</button>
</div>`
        total += item.price
    })
    document.querySelector("#total").textContent = total
    document.querySelector(".cartItem").innerHTML = clutter2
    if (filterArr.length === 0) {
        document.querySelector("#empty").style.display = "block"
        document.querySelector("#buy").style.display = "none"
    }
    else {
        document.querySelector("#empty").style.display = "none"
        document.querySelector("#buy").style.display = "block"
    }
}
function removeCart() {
    document.querySelector(".cartItem").addEventListener("click", function (dets) {
        if (dets.target.classList.contains("remove")) {
            var idx = products.findIndex(elem => elem.productUrl === dets.target.dataset.id)
            products[idx].addToCart = false
            updateCart()
        }
    })
}

function showCategory() {
    var unique = []

    products.forEach(function (prod) {
        if (!unique.includes(prod.category)) {
            unique.push(prod.category)
        }
    })
    var clutter3 = ""
    unique.forEach(function (category) {
        clutter3 += `<button data-category="${category}" class="cate p-3 py-1 border-2 mt-1 hover:bg-zinc-100 hover:text-black">${category}</button>`
    })
    document.querySelector(".category").innerHTML = clutter3
}

function updateCategory() {
    document.querySelector(".categories").addEventListener("click", function (dets) {
        if (dets.target.classList.contains("cate")) {
            var categoryFilter = products.filter(elem => elem.category === dets.target.dataset.category)
            var clutter4 = ""
            categoryFilter.forEach(function (prod) {
                clutter4 += `<div class="product p-3 w-full sm:w-64 bg-zinc-800">
             <div class="w-full h-52 overflow-hidden">
                 <img class="w-full h-full object-cover object-center" src="${prod.productUrl}" alt="">
             </div>
             <h3 class="capitalize text-xl ">${prod.productName}</h3>
             <p class="text-sm text-zinc-500">${prod.ProductStatus}</p>
             <h4 class="text-lg mt-4 ">₹<span class="price">${prod.price}</span> <span class="text-sm line-through text-zinc-500">₹${prod.price * 2}</span></h4>
             <button data-index="${prod.productUrl}" class="add p-3 py-2 bg-blue-600 rounded w-full mt-1">ADD TO CART</button>
         </div>`
            })

            document.querySelector("#container").innerHTML = clutter4
        }
    })
}

document.querySelector("#all").addEventListener("click", function () {
    showProd()
})



updateCategory()
showCategory()
showProd()
addToCart()
removeCart()
