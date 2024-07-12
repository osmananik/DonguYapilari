
const yeniSifre="dasda!asdasdas";

if(yeniSifre.length>=12 && yeniSifre.includes("!")){
    console.log("şifre baya güçlü"); //parolanın içinde ! var ise şifrem baya güçlü demek istiyorum
}
else if(yeniSifre.length>=8){
    console.log("şifre yeterli");
}
else{
    console.log("şifreyi yeniden giriniz");
}

const control=false;
if(!control){
    console.log("KONTROL BAŞARILI");
}