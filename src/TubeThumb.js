import React from 'react'

const TubeThumb = ({ src_title, item }) => {
    return (
        <div>
            <iframe src={src_title}
                frameBorder='0'
                allow='autoplay; encrypted-media fullscreen'
                title='video'
                height='150'
                width='300'
            />
        </div>
    )
}

export default TubeThumb
