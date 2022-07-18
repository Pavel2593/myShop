import React from 'react'

const DefaultInputFile = ({ setFile, ...props }) => {
    return (
        <input
            type="file"
            {...props}
            onChange={(e) => { setFile(e.target.files[0]) }}
        />
    )
}

export default DefaultInputFile