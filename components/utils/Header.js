import React from 'react'
import Link from 'next/link'

export const Header = ({ login }) => {
    const headerStyle = {
        position: 'relative',
        padding: "1.5rem 1rem 1.2rem 1rem",
        color: '#fff',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'space-between',
    }
    const logoStyle = {
        fontSize: '18px',
        padding: '4px 13px 4px 13px',
        color: '#fff',
        cursor: 'pointer'
    }
    const btnStyle = {
        padding: '4px 13px 4px 13px', 
        border: 'solid 1px #f8f9fa', 
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer'
    }
    return (
        <div style={headerStyle}>
            <div>
                <Link href="/">
                    <a style={{textDecoration:'none'}}>
                        <span style={logoStyle}>brand logo</span>
                    </a>
                </Link>
            </div>
            <div style={{marginRight:'10px'}}>
                {
                    login==="true"
                    ?
                    (<span style={btnStyle} data-toggle="modal" data-target="#login-form">member login</span>)
                    :
                    (<div></div>)
                }
            </div>
        </div>
    )
}