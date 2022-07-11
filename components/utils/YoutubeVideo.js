import React from 'react'

export const YoutubeVideo = ({ src, title, margin }) => {
    const videoStyle = {
        border: 'none',
        borderStyle: 'none',
        borderRadius: '5px'
    }
    return (
        <>
            <iframe
            src={src} title={title} 
            className={margin}
            style={videoStyle} />
        </>
    )
}