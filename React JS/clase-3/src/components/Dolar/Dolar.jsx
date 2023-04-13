import { useState, useEffect } from "react";

export const Dolar = () => {
    const [dolar, setDolar] = useState([])

    useEffect(()=>{
        setInterval(()=>{
            fetch("https://criptoya.com/api/dolar")
            .then(response => response.json())
            .then(dolar =>{
                setDolar(dolar)
            } )
        }, 5000)

    }, [])



    return (
        <div>
            <p>solidario: {dolar.solidario}</p>
            <p>blue: {dolar.blue}</p>
        </div>
    )
};