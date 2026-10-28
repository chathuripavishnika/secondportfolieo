
let calHistory=[];




    function clickMe1(){
    //console.log(document.getElementById ("txtsample").value);
    let txtvalue1 = document.getElementById ("txtsample1").value;
    let num01 = parseInt(txtvalue1);
    let txtvalue2 = document.getElementById ("txtsample2").value;
    let num02 = parseInt(txtvalue2);
    let sub = num01 - num02;


    
    //document.getElementById("lblSection").innerHTML = "<h1>"+ sub + "</h1>";
    document.getElementById("calHistory").innerHTML = "<h1>"+ sub + "</h1>";
    
    calHistory.push(num01+"+"+num02+"="+sub);
    loadData();




}
function clickMe2(){
    //console.log(document.getElementById ("txtsample").value);
    let txtvalue1 = document.getElementById ("txtsample1").value;
    let num01 = parseInt(txtvalue1);
    let txtvalue2 = document.getElementById ("txtsample2").value;
    let num02 = parseInt(txtvalue2);
    let add = num01 + num02;
    
    
   // document.getElementById("lblSection").innerHTML = "<h1>"+ add+ "</h1>";
    document.getElementById("calHistory").innerHTML = "<h1>"+ add+ "</h1>";

    calHistory.push(num01+"+"+num02+"="+add);
    loadData();



 
}

    




}
function loadData(){
    for(let data of arcalHistory){
        document.getElementById("CalHistory").innerHTML +="<li>"+data+ "</li>"

        
    
    }
}



  
 
//  let calHistory=["10","20","30","40"];

//  calHistory[]=12;

//  for(let i= 0;i<calHistory.length;i++){
//         console.log(calHistory[i]);
         
//     calHistory.push=12;
//      System.out.println(12);
   
        


//  }



// //  for(let num of calHistory){
// //      console.log(num);



// //  }

// //  calHistory.forEach(data=>{
// //     console.log(data);

// //  })

 console.log(calHistory);

 
 