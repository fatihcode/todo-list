import React from 'react'

export default function List(props) {

   return (
      <div className="liste">

         <ul>

            {props.list.map((item, i) => {
               return (
                  <li key={i}>
                     <div className="item">
                        <i className={item.ok ? "bi bi-check2-circle" : "bi bi-circle"} onClick={() => props.listOk(item.id)}></i>
                        <span className={item.ok ? "ok title" : "title"}>{item.baslik}</span>
                     </div>
                     <div className="item">
                        <span className="date">{item.dat}</span>
                        <i className="bi bi-x-lg" onClick={() => props.listRemove(item.id)}></i>
                     </div>
                  </li>
               )
            })}

         </ul>

      </div>
   )
}