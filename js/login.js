document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    
    // step 3: get phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;


    // this is temporary

    if(phoneNumber === '01712506724' && pinNumber === '1234'){
        window.location.href = '/home.html';
        
    }else {
        console.log('wrong phone or pin')
        
    }

   
})