let yas=29;

if(true){ 
       let yas=41;
        console.log("İçerideki: ",yas); //içeridekide 41 basar  ifin içerisindeki değer lokal atandı parantezin içerisinde bu geçerlidir.
        if(true)
        {
                let yas=26;
                let ad="zeynep";
                var osman="CİMBOM";
                console.log("İçeridekinin içindeki: ",yas,ad,osman); //local olarak yas değeri 26 olarak geçer parantezin içinde 
        }
}

console.log("Dışarıdaki: ",yas,osman);  //dışarıdakide 29 basar globaldir ad değişkenini bulamaz çünkü içerde tanımladık
 
//let ve const ile tanımlananlar tanımlandıkları lokal parantez içinde geçer
//var değişkeni heryerde geçerliliği vardır