import React, { useRef, useState, useEffect} from "react";

const Login = () => {
    //useRef
    const userRef = useRef()
    const errRef = useRef()

    //useState
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')


    return(
        <section>

        </section>
    )
}

export default Login