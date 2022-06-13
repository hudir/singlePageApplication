const { createContext, useState } = require("react");

const Context = createContext();

export function ContextProvider({children}){
    const [theme, setTheme] = useState("dark")
    , [user,setUser] = useState(null)


    function checkboxChangeHandler(e){
       e.target.checked ? setTheme('dark') : setTheme('light')
    }

    function btnClickHandler(e){
       if(user){
        setUser(null)
        e.target.textContent = 'Login'
       } else {
        setUser(userData)
        e.target.textContent = 'Logout'
       }
    }


    return ( <Context.Provider value={{
        checkboxChangeHandler
        ,theme
        ,btnClickHandler
        ,user
    }}>{children}</Context.Provider> )
}


export default Context;


const userData = {
    name: "John Doe",
    email: "john@doe.com",
    address: {
      street:"sunnystreet 123",
      city: "Berlin",
    },
    interests:['coding', 'swimming', 'music']
  };