document.getElementById('cash-out-btn').addEventListener('click',function(){
    document.getElementById('add-money-btn').classList.remove('bg-green-300')
    document.getElementById('cash-out-btn').classList.add('bg-green-300')
    // remove hidden
    document.getElementById('cash-out-form').classList.remove('hidden')
    // add hidden class in add money form
    document.getElementById('add-money-form').classList.add('hidden')
})


document.getElementById('add-money-btn').addEventListener('click',function(){

    document.getElementById('add-money-btn').classList.add('bg-green-300')
    document.getElementById('cash-out-btn').classList.remove('bg-green-300')

    // remove hidden
    document.getElementById('add-money-form').classList.remove('hidden')
    // add hidden class in add money form
    document.getElementById('cash-out-form').classList.add('hidden')
})