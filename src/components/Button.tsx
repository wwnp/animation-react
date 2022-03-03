import React from 'react'
import { motion } from 'framer-motion'
export const Button = (props: any) => {
  const {
    text = 'Click',
    handleClick = Function.prototype,
    isSelected
  } = props
  return (
    <motion.button
      style={{
        border: 'none',
        outline: 'none',
        padding: '12px 16px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        position: 'relative',
      }}
      whileHover={{
        backgroundColor: '#ddd'
      }}
      whileTap={{
        backgroundColor: '#ccc'
      }}
      initial={{
        color: 'none'
      }}
      animate={{
        color: isSelected ? '#ff0000' : '#000'
      }}
      onClick={handleClick}
    >

      {isSelected && <ActiveBg></ActiveBg>}
      <motion.span
        style={{
          position: 'relative'
        }}
        animate={{
          color: isSelected ? '#fff' : '#000'
        }}
      >
        {text}

      </motion.span>
    </motion.button>
  )
}

const ActiveLine = () => {
  return (
    <motion.div
      layoutId='activeItem'
      style={{
        width: 'calc(100%)',
        height: '5px',
        position: 'absolute',
        bottom: '2px',
        left: '0',
        backgroundColor: 'red'
      }}
    >

    </motion.div>
  )
}
const ActiveBg = () => {
  return (
    <motion.div
      layoutId='activeItem'
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'red',
        zIndex:0
      }}
    >

    </motion.div>
  )
}