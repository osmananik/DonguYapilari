const yas=20;

if(yas>18){
    console.log("18 yaşından büyüktür");

}
const adSoyad=["osman","kübra","yusuf"];

if(adSoyad.length>2){
    console.log("işte benim öğrencilerim");
}

const sifre="şampiyonjavascript";

if(sifre.length>=8){
    console.log("şifre yeterince uzun");
}
else{
    console.log("şifreyi yeniden giriniz");
}

const yeniSifre="dasda85296";

if(yeniSifre.length>=12){
    console.log("şifre güçlü");
}
else if(yeniSifre.length>=8){
    console.log("şifre yeterli");
}
else{
    console.log("şifreyi yeniden giriniz");
}