import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
export const Button = forwardRef((props: any, ref: any) => {
  const {
    children
  } = props
  return (
    <button
      ref={ref}
      style={{
        // border: 'none',
        outline: 'none',
        padding: '12px 16px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {children}
    </button>
  )
})
export const MButton = motion(Button);