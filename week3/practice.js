// let obj = {
//     name: 'Ash Ketchum',
//     age: 34,
//     pokemons: [{
//       'pikachu': ['electricshock']
//       }, {
//       'bulbasaur': ['vinewhip', 'ivywall']
//       }, {
//       'charmander': [{
//         'flamebreath': 200
//         }]
//       }]
//   }
//   console.log(obj.age)
//   console.log(obj.pokemons[1].bulbasaur[1])
//   console.log(obj.pokemons[2].charmander[0].flamebreath)


//   function multiply(a, b) {
//     console.log('new stack 3')
//     return a * b
//   }
//   function square(n) {
//     console.log('new stack 2')
//     return multiply(n, n)
//   }
//   function printSquare(n) {
//     console.log('new stack 1')
//     const result = square(n)
//     console.log(result)
//   }
  
//   printSquare(4)

  // stack 

  // multiply(a, b)
  // square(n)
  // printSquare(n)

  // stack 


//   console.log('1')
//   setTimeout(function(){console.log('2')},2000)
//   console.log('3')


  let num = [0,1,0,3,12]
  let newArr = []
  let tempArray = []
  num.map( (number) => {
      if (number === 0 ){
          newArr.push(number)
      } else if(number !== 0 ){
        tempArray.push(number)
      }
  } )
  let final = tempArray.concat(newArr)
  console.log(final)

// function pushNum(num){
//     let newArray = []
//     let tempArray = []
//     for ( number in num){
//         console.log(number)
//         if (num[number] === 0 ){
//             newArray.push(num[number])
//         } else if ( num[number] !== 0 ){
//             tempArray.push(num[number])
//         }
//     }
//     let finishedArray  = tempArray.concat(newArray)
//     return  console.log(finishedArray)
// }
// pushNum(num)




// function moveArray(arr) {
//     for (i = arr.length -1; i >= 0; i--) {
//       console.log(arr, i)
//       if (arr[i] < 1 ) {
//         num = arr.splice(i,1); 
//         arr.push(num[0])
//       }
//     }
//     return arr
//   }
//   console.time(moveArray([0, 1, 0, 3, 12]))

//   console.log(console)