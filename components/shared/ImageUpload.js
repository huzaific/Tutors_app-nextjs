import React, { useState } from 'react'
import Dropzone from 'react-dropzone'

export default function ImageUpload({ image , setImage }) {

    const style = {
        width:'100%',
        height:'100%',
        borderRadius:"20px",
        objectFit: "cover",
        objectPosition: "center",
        border:'1px solid #D9D9D9',
        overflow:'hidden'
    }


    return (
        <Dropzone style={style} multiple={false} onDrop={acceptedFiles => {
            const file = acceptedFiles[0]
            console.log(file)
          
            const reader = new FileReader()
            reader.onload = () => {
                const dataURL = reader.result
                setImage({ file  , url:dataURL })
            }
            reader.readAsDataURL(file)

            // const bufferReader = new FileReader()
            // bufferReader.onload = () => {
            //     const dataBuffer = reader.result
            //     setImage({ ...image , buffer:dataBuffer })
            // }
            // reader.readAsArrayBuffer(file)

        }} >
            {({getRootProps , getInputProps}) => {
                return (
                    <div {...getRootProps({
                        style:style
                    })}>

                        <input {...getInputProps()} type="file" />
                        <img style={{ width:'100%' , height:'100%'}} src={image.url} alt="image" />

                    </div>
                )
            }}
        </Dropzone>
    )
}
