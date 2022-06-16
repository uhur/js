const body = document.querySelector("body")
const button = document.querySelector("button")
const colors = ["black","yellow","green","#292118","#42424a","#43705d"]


button.addEventListener("click", changeBackground);
 let sıra =0;
    
function changeBackground(){
  //  console.log("butona tıklandı")
 // const rastgeleSayi =Math.floor(Math.random() * colors.length);
  //const secilenRenk = colors[rastgeleSayi]
  //console.log(rastgeleSayi, secilenRenk)
  
    //body.style.backgroundColor = secilenRenk;

    // sıra ile renk seçimi

    console.log(sıra);

   const secilenRenk = colors[sıra]
   sıra++;
   body.style.backgroundColor = secilenRenk;
   

}
