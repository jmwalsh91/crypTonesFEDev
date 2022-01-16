import React from "react";
import { useRef, useState, useEffect } from "react";

export default function Login() {
    const userRef = useRef()
    const errRef = useRef()

    const [ user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState('')
    
    return (
        <div>

        </div>
    )
}

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

Index -> imports Context -> returns homepage wrapped in context provider
*/
