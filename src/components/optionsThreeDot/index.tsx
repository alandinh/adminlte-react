/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

interface OptionsThreeDotProps {
    text: string;
    icon: string;
    path?: string;
    handleModal?: () => void;
}
function OptionsThreeDot(props: OptionsThreeDotProps) {
    const {path, handleModal, text, icon} = props
  return path ? (
    <Link to="/">
     <img src={icon} alt="icon" />
     <p>{text}</p>
    </Link>
  ) : (
    <div onClick={handleModal}>
        <img src={icon} alt="icon" />
    <p>Xóa</p>
  </div>
  )
}

export default OptionsThreeDot