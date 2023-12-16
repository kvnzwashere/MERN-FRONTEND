import React from 'react'
import './upload.scss'
import { m3rn } from '../../..'

const Upload = () => {
  return (
    <div className="upload">
        <img className="preview" src={m3rn} alt="preview" />
        <input type="file" />
    </div>
  )
}

export default Upload