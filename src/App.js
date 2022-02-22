import React, { useState } from 'react'
import Form from './components/Form'
import List from './components/List'


const initalState = [
   { id: 1, baslik: "Markete Uğra", dat: "19.01.2022", ok: false },
   { id: 2, baslik: "Faturaları Öde", dat: "20.01.2022", ok: true },
   { id: 3, baslik: "E-postalara göz at", dat: "21.01.2022", ok: false },
   { id: 4, baslik: "Proje Hazırla", dat: "23.01.2022", ok: true },
   { id: 5, baslik: "Konu Tekrarı Yap", dat: "19.02.2022", ok: false },
   { id: 6, baslik: "Bankaya Uğra", dat: "20.02.2022", ok: false }
]

export default function App() {

   const [liste, setListe] = useState(initalState)

   const listAdd = (item) => {
      setListe([...liste, { id: Date.now(), baslik: item, dat: new Date().toLocaleDateString(), ok: false }])
   }

   const listOk = (id) => {
      setListe(liste.map(item => item.id == id ? { ...item, ok: !item.ok } : item))
   }

   const listClear = () => {
      setListe(liste.filter(item => !item.ok))
   }

   const listRemove = (id) => {
      setListe(liste.filter(item => item.id !== id))
   }

   return (
      <main>

         <h1><i className="bi bi-check2-square"> </i>Yapılacak Listesi</h1>

         <Form listAdd={listAdd} />
         <List list={liste} listOk={listOk} listClear={listClear} listRemove={listRemove} />

      </main>
   )
}