let display = document.getElementById("display");
        function pressNumber(value){
             display.value=display.value + value;

        }
    //    function appendValue(Value){
    //         display.value=display.value + value;

    //    }

       function clearDisplay(){
            display.value="";
       }

    //    function DeleteLast(){
    //         display.value=display.value.slice(0,-1);
    //    }

       function calculate(){
        try{
            display.value=eval(display.value);
        }catch(error){
                display.value="error"
        }
       }
        