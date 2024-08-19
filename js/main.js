let elInput = document.querySelector(".hero__input")
let elWrapper = document.querySelector(".content-list")
const countries = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg"
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg"
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg"
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg"
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg"
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg"
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg"
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg"
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg"
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg"
    }
]

function renderCountries(arr) {
    elWrapper.innerHTML = null
    arr.map(item => {
        let countriesItem = document.createElement("li")
        countriesItem.className = "w-[350px] p-5 bg-slate-300 rounded-lg"
        countriesItem.innerHTML =`
        <img class = "w-full h-[170px] object-cover" src=${item.flag} alt="">
        <h2 class = "mt-[5px] text-lg font-semibold text-teal-800"> Country: ${item.name}</h2>
        <p class = "mt-[2px] text-base font-normal text-teal-600"> Capital: ${item.capital}</p>
        <p class = "mt-[2px] text-base font-normal text-teal-600"> Population: ${item.population}</p>
        <strong class = "text-cyan-950 text-lg ">${item.id}</strong>
        <div class = "mt-[8px] w-[60%] flex items-center justify-between">
            <button class = "w-[40px] bg-[#64748B] flex items-center justify-center rounded-[10px]">
                <img  src="./images/icon-heart.svg" alt="" width="30" height="30">
            </button>
            <button class = "w-[40px] bg-[#64748B] flex items-center justify-center rounded-[10px]">
                <img  src="./images/saved-icon.svg" alt="" width="30" height="30">
            </button>
            <a id = "more" class = "more w-[40px] bg-[#64748B] cursor-pointer flex items-center justify-center rounded-[10px]">
                <img  src="./images/more.svg" alt="" width="30" height="30">
            </a>
            
        </div>
        
        
       <div class ="big-wrapper w-full h-full backdrop-blur-lg hidden fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center">
            
            <div id = "modal-wrapper" class ="w-[400px] p-5 rounded-lg bg-slate-300">
            <button class = "close-btn">
                <img id = "close" class = "w-[40px] h-[40px] ml-auto mb-[15px]" src="./images/close.svg" alt="">
            </button>
                <img class = "w-full h-[300px] object-cover rounded-lg" src=${item.flag} alt="">
                <h2 class = "mt-[5px] text-[40px] font-bold text-teal-800"> Country: ${item.name}</h2>
                <p class = "mt-[2px] text-[30px] font-samibold text-teal-600"> Capital: ${item.capital}</p>
                <p class = "mt-[2px] text-[30px] font-samibold text-teal-600"> Population: ${item.population}</p>
                <strong class = "text-cyan-950 text-[40px] ">${item.id}</strong>
                <div class = "mt-[8px] w-[70%] flex items-center justify-between">
                    <button class = "w-[60px] py-[5px] bg-[#64748B] flex items-center justify-center rounded-[10px]">
                        <img  src="./images/icon-heart.svg" alt="" width="40" height="40">
                    </button>
                    <button class = "w-[60px] py-[5px] bg-[#64748B] flex items-center justify-center rounded-[10px]">
                        <img  src="./images/saved-icon.svg" alt="" width="40" height="40">
                    </button>
                    <a target="_blank" href = "https://en.wikipedia.org/wiki/${item.name}" class = "w-[60px] py-[5px] bg-[#64748B] flex items-center justify-center rounded-[10px]">
                        <img  src="./images/more.svg" alt="" width="40" height="40">
                    </a>
                </div> 
            </div>
       </div>
        `
        
        
        
        
        elWrapper.appendChild(countriesItem)
    })
}
renderCountries(countries)


elInput.addEventListener("keyup", function(evt){
    const searchValue = evt.target.value.toLowerCase()
    const filteredCountry = countries.filter(item => item.name.toLowerCase().includes(searchValue) || item.population.toString().includes(searchValue))
    console.log(filteredCountry);
    renderCountries(filteredCountry)
})



let moon = document.querySelector("#moon")
let sun = document.querySelector("#sun")
let body = document.querySelector("body")

moon.addEventListener("click", function(){
    body.classList.add("dark_bg");
    moon.style.display = "none"
    sun.style.display = "block"
})
sun.addEventListener("click", function(){
    body.classList.remove("dark_bg");
    moon.style.display = "block"
    sun.style.display = "none"
})

let elMore = document.querySelectorAll("#more")

elMore.forEach(item => {
    item.addEventListener("click", function(){
        let parent = item.closest("li");
        console.log(parent);

        let elModalWrapper = parent.querySelector(".big-wrapper")
        elModalWrapper.style.display = "flex"
    })
    
})

let elCloseBtn = document.querySelectorAll(".close-btn")

elCloseBtn.forEach(item => {
    item.addEventListener("click", function(){
        let modal = item.closest(".big-wrapper")
        
        modal.style.display = "none";
    })
})

