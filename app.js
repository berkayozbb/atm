
localStorage.setItem("secur", "alex");

let sifre = localStorage.getItem("sifre");

let bakiye = localStorage.getItem("bakiye");

let secur = localStorage.getItem("secur");

let borc = localStorage.getItem("borc");

$(".main").css("display","none");

$(".girisyap").click(function () {

    let girilenSifre = $(".girilenSifre").val();

    if(girilenSifre == sifre){
        $(".login").css("display","none");
        $(".main").css("display","block");
        $(".guncelBakiye").html("Bakiye: " + bakiye +" "+ "$");
        $(".islembtn").click(function () {
           let secilenIslem = $(".secilenIslem").val();
           let girilenTutar=Number($(".girilenTutar").val());
           $(".guncelBakiye").html("Bakiye: " + bakiye +" "+ "$");

           if (secilenIslem == "Para Çek" && girilenTutar<=bakiye){
            bakiye = bakiye - girilenTutar;
            localStorage.setItem("bakiye", bakiye );
            $(".guncelBakiye").html("Bakiye: " + bakiye +" "+ "$");
           }
           else if(secilenIslem == "Para Çek" && girilenTutar>bakiye){
            $(".islembtn").css("display","none");
            $(".yetersizBakiye").css("display","block");
            $(".anlasildi").css("display","inline-block");
            $(".anlasildi").click(function () {
                $(".islembtn").css("display","inline-block");
                $(".login").css("display","none");
        $(".main").css("display","block");
                $(".anlasildi").css("display","none");
                $(".yetersizBakiye").css("display","none");
            })
           }
           
           else if(secilenIslem=="Para Yatır"){
            bakiye = Number(bakiye);
            bakiye = bakiye + girilenTutar;
            localStorage.setItem("bakiye",bakiye);
            $(".guncelBakiye").html("Bakiye: " + bakiye +" "+ "$");
           }
           else if(secilenIslem=="Kredi Çek"){

           $(".main").hide();
           $(".krediVade").show(); 

           $(".krediBtn").click(function () {
           let krediAy = $(".krediAy").val();
           if(krediAy=="3ay"){
            bakiye=Number(bakiye);
            bakiye=bakiye+ girilenTutar;
            localStorage.setItem("bakiye",bakiye);
            let toplamBorc= girilenTutar * 2 ;
            let ayBorc=Math.round(toplamBorc/3);
            guncelBorc=Number(localStorage.getItem("borc"));
            guncelBorc=guncelBorc+toplamBorc;
            localStorage.setItem("borc",guncelBorc);
            $(".krediSonuc").html('Toplam Borcunuz : ${toplamBorc} <br> Aylık Ödemeniz : ${ayBorc}')
            }
           })
           }
        });
        $(".home").click(function () {
            $(".login").css("display","block");
        $(".main").css("display","none");
        })
    }         
    else{
        $(".alert-bg").css("display","block");
    }
})

$(".createPassword").click(function () {
    $(".alert-bg2").css("display","none");
            $(".login").css("display","none");
            $(".changePassword").css("display","none");
            $(".changePassword2").css("display","block");
            $(".sifreBtn2").click(function () {
                let yeniSifre = $(".newPassword").val();
                localStorage.setItem("sifre",yeniSifre);
            })
})

$(".forgetPassword").click(function () {

    $(".login").css("display","none");
    $(".changePassword").css("display","block");
    $(".sifreBtn").click(function () {
        let securyAnswer = $(".guvenlikSorusu").val();
        if (securyAnswer == secur){
            $(".alert-bg2").css("display","none");
            $(".login").css("display","none");
            $(".changePassword").css("display","none");
            $(".changePassword2").css("display","block");
            $(".sifreBtn2").click(function () {
                let yeniSifre = $(".newPassword").val();
                localStorage.setItem("sifre",yeniSifre);
            })
        }
        else{
            $(".alert-bg2").css("display","block");
        }
    })
})
$(".home").click(function () {
    $(".login").css("display","block");
$(".changePassword").css("display","none");

})
$(".home2").click(function () {
    $(".login").css("display","block");
$(".changePassword2").css("display","none");
})

$('.home').click(function() {
    location.reload();
});

$('.home2').click(function() {
    location.reload();
});