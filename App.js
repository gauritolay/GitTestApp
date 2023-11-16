import React, { useEffect } from "react";

export default function App(){
    const owner = "Gauri"
    const repository = "testRepo"
    useEffect(()=>{
        console.log("owner", owner);
        console.log("repository", repository);
    }, [])

}