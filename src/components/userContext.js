import React from "react";
import { useRef, useState, useEffect, useMemo, useContext } from "react";
import { createContext } from "react";



const initUser = {
        user: {
            username: '',
            id: 0,
            savedPatches: []
        }/* ,
        setUser: () => ({}) */
    }


const UserContext = React.createContext(initUser)/* {
        user: {
            username: 'joe',
            savedPatches: []
        },
        setUser: () => ({})
    }) */




const UserContextProvider = ({children}) => {
    /* const [user, setUser] = useState(initUser)
    const value = useMemo(
        () => ({ user, setUser }), 
        [user]
        
      ); */
      const [user, setUser] = useState(UserContext)
    
      return(
          <UserContext.Provider value={{user, setUser}}>
              {children}
          </UserContext.Provider>
      )
    }



/* 
const UserContext = React.createContext({
    user: null,
    setUser: () => {}
 }) */

 export { UserContext, UserContextProvider, initUser }
/* const [currUser, setCurrUser] = useState(currentUser) */
/* 
export const UserContextProvider = ({ children }) => {
    const [ user, setUser] = useState(currentUser)
    return (
        <UserContext.Provider value={{ user , setUser }}>
            {children}
        </UserContext.Provider>
    )
}
 */
/* 
const useUserContext = () => {
    const context = useUserContext(UserContext);
  
    if (context === undefined) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    console.log(context)
    return context;
  };
  
  export default useUserContext;

 */
/*
We need a way to declare the data that we want available throughout our component tree.

we need a way for any component in the component tree that requires that data to be able to subscribe to it

new context for each unique piece of data that needs to be available throughout your component tree

.provider allows us "declare the data that we want available throughout our component tree"

.Consumer allows any component in the component tree that needs that data to be able to subscribe to it 

<MyContext.Provider value={data>}
<app/>
</MyContext.Provider>

const LocaleContext = React.createContext()

Index -> imports Context -> returns homepage wrapped in context 

default val
whenever you reference a consumer component its gonna get its val from the nearest parent .Provider 
if this doesnt exist it is going to get the initial value from the creation of the context component
*/
