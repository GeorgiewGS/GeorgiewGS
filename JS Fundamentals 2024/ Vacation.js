function  Vacation(count, type, day) {
  pricePerPerson = 0;   

 switch (day){
 case (`Friday`):
if(type === `Students`){
    pricePerPerson =8.45;
}else if (type ===`Business`){
    pricePerPerson = 10.90;
}else if ( type === `Regular`){
    pricePerPerson = 15;
}
    break;

case (`Saturday`):
    if(type === `Students`){
        pricePerPerson = 9.80;
    }else if (type ===`Business`){
        pricePerPerson = 15.60;
    }else if ( type === `Regular`){
        pricePerPerson = 20;
    }
     break;

case (`Sunday`):
    if(type === `Students`){
        pricePerPerson = 10.46;
    }else if (type ===`Business`){
        pricePerPerson = 16;
    }else if ( type === `Regular`){
        pricePerPerson = 22.50;
    }
     break;

}
 totalPrice = count * pricePerPerson ;
if(type === `Students` && count >= 30){
    totalPrice *= 0.85;
}else if (type === `Busness` && count >= 100){
    totalPrice -= 10 * pricePerPerson;
}else if ( type === `Regular` && (count >= 10 && count <= 20)){
    totalPrice *= 0.95
}
console.log(`Total price: ${totalPrice.toFixed(2)}`)


}


Vacation(  30,
    "Students",
    "Sunday"
    )      
    
    
