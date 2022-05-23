// // const getTodo = callback => {
// //     setTimeout(() => {
// //        callback ({ text: 'Complete Code Example' })
// //     }, 2000)
// // }
// // getTodo(todo => {
// //     console.log(todo.text)
// // })

// // console.log(9 % 3 == 0);


// let users = [
//     {
//         name: "Sam",
//         age: 64,
//         hobby: "cooking",
//         hobbies: {
//           hobb1: "cooking",
//           hobby2: "sleeping"
//         }
//       },
//       { name: "Bruno", age: 56 },
//       { name: "Dave", age: 56, hobby: "Football" },
//       {
//         name: "Jacob",
//         age: 65,
//         hobbies: {
//           hobb1: "driving",
//           hobby2: "sleeping"
//         }
//       }
//     ];

//     // users.forEach((user) => {
//     //     console.log(user.hobbies && user.hobbies.hobby2);
//     //   });


//       users.forEach((user) => {
//         console.log(user ?.hobbies ?.hobby2);
//       });

//       console.log('B'.charCodeAt());


 // luck number (name) ==> 1 digit number
    //   n='john'.toUpperCase().split('').reduce((a,x)=>x.match(/[A-Z]/) && a+ +x.charCodeAt() -64,0)
    //   console.log(n)
    // while(n>9) n=n.toString().split('').reduce((a,x)=>a+ +x,0)
    //  console.log(n)


   //  console.log(10000**2);

   const objX= {
      x:999,
      showX: function(){
         return this.x
      }
   }


   const unboundShowX = objX.showX
   console.log(unboundShowX());

   const boundShowX = unboundShowX.bind(objX)
   console.log(boundShowX());