
function check(){

    let numb = parseInt(document.querySelector('#input_text1').value);
    // let input2=parseInt(document.querySelector('#input_text2').value);
    // let input3=parseInt(document.querySelector('#input_text3').value);
     

    let i; 
     for ( i= 2; i < numb; i++){
        if ( numb % numb === 0){
           alert('it is a prime number');
        }else {
            alert('it is not a prime number');
        }
   
    }

    // alert(Math.min(input1, input2, input3));


    // if (input1 < input2 && input1 < input3)
    // {
    //     alert('saad is younger ' )
    // }
    // else if(input2 < input1 && input2 < input3)
    // {
    //     alert('mariam is younger ')
    // }
    // else 
    // {
    //     alert('umer is younger')
    // }

}
