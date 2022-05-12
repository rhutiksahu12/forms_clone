import React from 'react'
import Form from './Form'

const Drawer = () => {
    const addForm = ()=>{
        console.log('first')
    }

    return (
        <div>
            <Form />
            <div>
                <button type="button" className="btn btn-primary" onClick={ addForm }>+</button>
            </div>
        </div>
    )
}

export default Drawer