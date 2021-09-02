import React from 'react'

const YoutubeVideo = ({ 
    autoplay = true, 
    className = {}, 
    height = '800', 
    width = '1600',

}) => {
    return (
        <div className={className}>
            <iframe 
            width={width}
            height={height} 
            src={`https://www.youtube.com/embed/-Cj8NnF3Psg?autoplay=${ autoplay ? '1' : '0' }&showinfo=0&rel=0&modestbranding=0`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
        </div>
    )
}

export default YoutubeVideo;
