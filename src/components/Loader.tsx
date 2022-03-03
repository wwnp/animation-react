import React from 'react'
import { motion } from 'framer-motion';
export const Loader = ({ color = 'black' }: any) => {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate3d(-50%,-50%,0)',
    }}>
      <motion.div
        animate={{
          scale: [1, 2, 1],
          rotate: [0, 180, 0],
          borderRadius: [5, 100, 5]
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          // times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          // repeatDelay: 1
        }}
        style={{
          background: color,
          width: '70px',
          height: '70px',
          boxShadow: '1px 2px 10px #fff'
        }}
      >
      </motion.div>
    </div>
  )
}
