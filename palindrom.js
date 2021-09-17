
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
    let strArray = str.split('')
    let reverseStrArray = []
    
    for(let i=strArray.length ;i>=0;i--){
      reverseStrArray.push(strArray[i])
         
    }


  let data =   reverseStrArray.join("")

  if(str===data){
      console.log('It  is a Palindrom')
    }
    else{
      console.log('It  is not Palindrom')

  }
    console.log("dddd",data)
}

console.log("log",palidrom('level'))

