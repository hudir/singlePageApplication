// const getTodo = callback => {
//     setTimeout(() => {
//        callback ({ text: 'Complete Code Example' })
//     }, 2000)
// }
// getTodo(todo => {
//     console.log(todo.text)
// })

// console.log(9 % 3 == 0);


let users = [
    {
        name: "Sam",
        age: 64,
        hobby: "cooking",
        hobbies: {
          hobb1: "cooking",
          hobby2: "sleeping"
        }
      },
      { name: "Bruno", age: 56 },
      { name: "Dave", age: 56, hobby: "Football" },
      {
        name: "Jacob",
        age: 65,
        hobbies: {
          hobb1: "driving",
          hobby2: "sleeping"
        }
      }
    ];

    // users.forEach((user) => {
    //     console.log(user.hobbies && user.hobbies.hobby2);
    //   });


      users.forEach((user) => {
        console.log(user ?.hobbies ?.hobby2);
      });