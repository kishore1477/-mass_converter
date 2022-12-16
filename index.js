
// var fromVal, toVal,dataVal;
//  var from = document.getElementById('from');
//  var to = document.getElementById('to');
//  var data = document.getElementById('data');
// function onChange(e) {
//      var val = e.target.value;
//      console.log("val: " , val);
//        fromVal = from.value
//       toVal = to.value
//       dataVal = data.value
//      console.log("dataVal", dataVal)
// }


 
 

// from.addEventListener('change',   onChange(e))
// to.addEventListener('change',  onChange())
cal.addEventListener('click', mainfunc)
     
 

function mainfunc() {
 alert("btn clicked")

     var from = document.getElementById('from');
 var to = document.getElementById('to');
 var data = document.getElementById('data');
 var fromVal = from.value
var  toVal = to.value
var  dataVal = data.value
   if(fromVal && toVal && dataVal){
     switch (true) {
   
          case ( fromVal==='kilogram') && ( toVal==='gram') :
               alert(dataVal)
            alert(' kilo and gram')
            break;
          case ( fromVal==='kilogram') && ( toVal==='milligram') :
               alert(dataVal)
            alert(' kilo and milligram')
            break;
             
            default:
                 console.log("inside fromVal", fromVal );
                 console.log("inside toVal", toVal );
             
            }
   }else{
alert("please enter data")
   }
 
  
}
