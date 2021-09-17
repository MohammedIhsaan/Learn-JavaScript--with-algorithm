
// function parlindrom (str){
//     let str2= str.split("").reverse().join("")
//     console.log("str",str2)
//     if(str===str2){
//         console.log('it is palidrom')
//     }
//     else{
//         console.log(
//             console.log('it is not a palidrom')

//         )
//     }
// }
// console.log("log",parlindrom('racecar'))

function palidrom(str){
    let str1 = ''
    
    
    for(let i=str.length-1 ;i>=0;i--){
      str1 += str[i]
         
    }


  if(str===str1){
      console.log('It  is a Palindrom')
    }
    else{
      console.log('It  is not Palindrom')

  }
    console.log("dddd",str1)
}

console.log("log",palidrom('now'))

