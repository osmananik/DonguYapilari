const notlar=[15,26,41,32,78,0];

for(let i=0;i<notlar.length;i++){

    if(notlar[i]===41)  // eşit olduğu değeri basmaz devam eder
    {
        continue;
    }

    console.log(notlar[i]);
    

    if(notlar[i]===78){
        console.log("Bravo En Yüksek Notu Sen Aldın");  //break komutu sayesinde i değeri 78 değerini gördüğünde döngüüyü durdurur çalıştırmaz döngüden çıkar
        break;
    }

}