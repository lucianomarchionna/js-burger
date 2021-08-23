var btnCalculate = document.getElementById("calculate");

btnCalculate.addEventListener("click",
    function(){

        var basePrice = 50;
        var addition = 0;
        var price = 0;
        var square = document.getElementsByClassName('square');
        
        for (let i = 0; i < square.length; i++){
            if (square[i].checked == true){
                addition += parseInt(square[i].value);
            }
        }
        
        var validCoupon = ['COUPON', '12345QWERT', '67890YUIOP', '1234567890', 'BOOLEAN'];
        var coupon = document.getElementById('coupon').value;
        
        if(coupon != ''){
            if (validCoupon.includes(coupon)){
                price = (addition + basePrice) * 0.5;
            } 
            else{
                alert('Coupon inserito non valido');
                price = addition + basePrice;
            } 
        }
        else{
            price = addition + basePrice;
        }

        document.getElementById('total-price').innerHTML = '$ ' + price;
    } 
) 