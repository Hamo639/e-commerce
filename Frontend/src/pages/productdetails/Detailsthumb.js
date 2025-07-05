import React from 'react';

const Detailsthumb = ({images,myRef,handleImgChange}) => {
     return (
        <div className="thumb" ref={myRef}>
            {
                images.map((img, index) =>(
                    <img src={img} alt="small img" key={index} 
                        onClick={() => handleImgChange(index)}ش
                    />
                ))
            }
        </div>
    );
}

export default Detailsthumb;
