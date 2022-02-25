import React, { useState, useEffect } from 'react'


export default function Form(props) {

    const [baslik, setBaslik] = useState("")

    const formAdd = (e) => {
        e.preventDefault()

        if (baslik) {
            props.listAdd(baslik)
            setBaslik("")
        }
    }

    useEffect(() => {

        const clean = document.getElementById("inputClean")
        baslik ? clean.style.display = "block" : clean.style.display = "none"

    }, [baslik])



    return (
        <form onSubmit={formAdd} className="formGroup">

            <div className="inputGroup">
                <i onClick={() => setBaslik("")} id="inputClean" className="bi bi-x-lg"></i>
                <input type="text" name="" id="" placeholder="Listeye ekle..."
                    onChange={(e) => setBaslik(e.target.value)} value={baslik} />
            </div>
            <button className="add"><i className="bi bi-plus-circle"> </i>#</button>

        </form>
    )
}