import React from 'react'

const YoutubeVideo = ({ 
    src = "https://www.youtube.com/embed/-Cj8NnF3Psg?autoplay=1&showinfo=0&rel=0&modestbranding=0", 
    className = {}, 
    height = '800', 
    width = '1600'
}) => {
    return (
        <div className={className}>
            <iframe 
            width={width}
            height={height} 
            src={src}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen />
        </div>
    )
}

export default YoutubeVideo;
