import React from 'react'

export const Line = ({ text }) => {
    const lineStyle = {
        border:'1px solid',
        borderRadius:'5px',
        padding:'5px'
    }
    return (
        <div className="m-2 mt-1 mb-1" style={lineStyle}>
            <div className='d-inline'>
                <ion-icon name="caret-forward-circle-outline"></ion-icon>
            </div>
            <div className='ml-3 d-inline'>{text}</div>
        </div>
    )
}