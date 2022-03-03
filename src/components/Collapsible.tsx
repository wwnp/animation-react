import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
export const Collapsible = (props: any) => {
  const {
    children,
    title
  } = props
  const [isVisible, setIsVisible] = useState(true)

  const collapseVariants = {
    hidden: {
      opacity: 0,
      height: 0
    },
    visible: {
      opacity: 1,
      height: 'auto'
    },
    exit: {
      opacity: 0,
      height: 0
    },
  }
  return (
    <>
      <div
        onClick={() => setIsVisible(!isVisible)}

        style={{
          backgroundColor: '#ddd',
          width: 300,
          padding: '0.8rem 1.2rem',
          border: '1px solid #ddd',
          userSelect: 'none',
          cursor: 'pointer',
        }}
      >
        {title}
      </div>
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            variants={collapseVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{
              duration: .2,
            }}
            style={{
              padding: '0.8rem 1.2rem',
              width: 300,
              border: '1px solid #ddd',
              overflow: 'hidden',
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
