import React, { useState } from 'react'
import Form from './components/Form'
import List from './components/List'


const initalState = [
   { id: 1, baslik: "Alışveriş Yapılacak", dat: "22.01.2021", ok: false },
   { id: 2, baslik: "Fatura Ödenecek", dat: "23.01.2021", ok: true },
   { id: 3, baslik: "Araba Yıkancak", dat: "23.01.2022", ok: false },
   { id: 4, baslik: "Proje Hazırlanacak", dat: "23.01.2022", ok: true },
   { id: 5, baslik: "Okula Uğra", dat: "19.02.2022", ok: false },
   { id: 6, baslik: "Markete Uğra", dat: "20.02.2022", ok: false },
   { id: 7, baslik: "Bankaya Uğra", dat: "21.02.2022", ok: false }
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