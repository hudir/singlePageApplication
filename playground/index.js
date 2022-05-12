const getTodo = callback => {
    setTimeout(() => {
       callback ({ text: 'Complete Code Example' })
    }, 2000)
}
getTodo(todo => {
    console.log(todo.text)
})

console.log(9 % 3 == 0);