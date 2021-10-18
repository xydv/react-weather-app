import React from 'react'
import Data from "./Data.json"
import Modal from './Modal'

function Modals() {
    return (
        <div>
            {Data.map((e) => {
                return(
                    <Modal btn1Text={e.btn1text} btn2Text={e.btn2text} desc={e.desc} title={e.title} />
                )
            })}
        </div>
    )
}

export default Modals
