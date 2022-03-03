import React, { useState } from 'react'
import { motion } from 'framer-motion'

const menuData = ['Short', 'Long', 'Normal']
export const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div
      style={{ display: 'flex', backgroundColor: '#eee', padding: '1rem', borderRadius: '25px' }}
    >
      {
        menuData.map((item, index) => {
          console.log(activeIndex === index)
          return (
            <MenuItem
              key={item}
              item={item}
              isSelected={activeIndex === index}
              handleClick={() => setActiveIndex(index)}
            >
            </MenuItem>
          )
        })
      }
    </div>
  )
}
function MenuItem(props: any) {
  const {
    item,
    isSelected,
    handleClick = Function.prototype
  } = props
  return (
    <motion.div
      onClick={handleClick}
      style={{
        margin: '0 10px',
        fontWeight: 900,
        position: 'relative'
      }}
      initial={{
        color: 'black'
      }}
      animate={{
        color: isSelected ? '#ff0000' : '#000'
      }}
      transition={{
        duration: .25
      }}
    >
      {/* {isSelected && <ActiveLine></ActiveLine>} */}
      {item}
    </motion.div >
  )
}
function ActiveLine() {
  return (
    <motion.div
      layoutId='activeItem'
      style={{
        width: '100%',
        height: '4px',
        position: 'absolute',
        bottom: '-6px',
        backgroundColor: '#ff5100',
      }}
    >
    </motion.div>
  )
}