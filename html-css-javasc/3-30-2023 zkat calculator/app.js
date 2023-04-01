document.getElementById("subit").addEventListener('click', function() {
    var money = document.getElementById("money").value
    var gold = document.getElementById("gold").value
    var silver = document.getElementById("silver").value
    var assets = document.getElementById("assets").value


    money = Number(money)
    gold = Number(gold)
    silver = Number(silver)
    assets = Number(assets)

    var Total = money + gold * 190392 + silver * 2466 + assets;



    var resultmoney = money / (100 / 2.5)
    var resultgold = gold * 190392 * 0.025
    var resulsilver = silver * 2466 * 0.025
    var resultassets = assets / (100 / 2.5)
    var finalresult = Number(resultmoney + resultgold + resulsilver + resultassets);

    if (Total <= 2466) {
        var result = "yor balence have to be more then <br /> <br />Rs 13,2352 <br /> <br /> or equal to or more then 7.5(tolla) Gold<br />  <br /> or equal to or more then  52.2(tolla) Silver"
        Swal.fire({
            title: result,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })



    } else {
        var result = " your total balence is= <br />  Rs" + Total + "<br /> <br />Your Total Zakat is= <br /> Rs" + finalresult
        Swal.fire({
            title: result,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
})