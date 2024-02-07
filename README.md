- 👋 Hi, I’m @GeorgiewGS
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...

<!---
GeorgiewGS/GeorgiewGS is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
function ToyShop(input){
let tripPrice = Number (input[0])
let puzzelsCount = Number (input[1])
let georgi = Number(input[2])
let bersCount = Number(input[3])
let minionsCount = Number (input[4])
let trucsCount = Number (input[5])

let puzzlePrice = puzzelsCount * 2.60
let dollsPrice = georgi * 3
let bersPrice = bersCount * 4.10
let minionsPrice = minionsCount * 8.20
let trucsPrice = trucsCount * 2

let toysCount = puzzelsCount+georgi+bersCount+minionsCount+trucsCount
let profit = puzzlePrice + dollsPrice + bersPrice + minionsPrice + trucsPrice
if (toysCount >= 50 ){
    let discount = profit * 0.25
    profit = profit - discount
}
let rent = profit * 0.10
profit = profit - rent
if(profit >= tripPrice){
    console.log(`Yes! ${(profit - tripPrice).toFixed(2)} lv left.`)
}else{
  console.log(`Not enough money! ${(tripPrice - profit).toFixed(2)} lv needed.`)  
}

}
