const arr = [
  "jeans",
  "shirts",
  "shorts",
  "hoodies",
  "tshirts",
  "mobiles",
  "laptops",
  "chargers",
  "blankets",
  "chairs",
  "pants"
]
const parentUl= document.querySelector("#parent"); // or getElementById

for (const item of arr) {
    const li = document.createElement("li");
    parentUl.appendChild(li)
    li.textContent = item;
}

const searchA = document.querySelector("#search");

searchA.addEventListener("input",(e)=>{
   const searchText = searchA.value.trim().toLowerCase();
  const filteredItems = arr.filter(item => item.toLowerCase().includes(searchText));

   parentUl.textContent = "";
   for(let item of filteredItems){
   const li = document.createElement("li");
    parentUl.appendChild(li)
    li.textContent = item;
   }
})