import React, { useState } from 'react'

export default function Form(props) {

    const [baslik, setBaslik] = useState("")

    const formAdd = (e) => {
        e.preventDefault()

        if (baslik) {
            props.listAdd(baslik)
            setBaslik("")
        }
    }

    return (
        <form onSubmit={formAdd}>

            <input type="text" name="" id="" placeholder="Listeye Ekle"
                onChange={(e) => setBaslik(e.target.value)}
                value={baslik} />
            <button className="add"><i className="bi bi-plus-circle"> </i>#</button>

        </form>
    )
}