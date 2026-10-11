let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);


// Logic functionality

arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerText == '='){
             string = eval(string);
             input.value = string;
        }
        else if(e.target.innerText == 'C'){
            string = "";
            input.value = string;

        } else if(e.target.innerText == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        } else if(e.target.innerText == '%'){
             
            string = string/100
            input.value= string;
        }
        
        
        else{
        string += e.target.innerText;
        input.value = string;
        
        }
         

       
    })  
})











