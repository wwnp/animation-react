import React, { useState } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { Button } from './Button';

interface IEl {
  category: string
  title: number
}

export const Filter = ({ data }: any) => {
  const [cards, setCards] = useState(data)
  const [activeIndex, setActiveIndex] = useState(0)

  const btns = data.reduce((acc: any[], el: { category: string, title: string }) => {
    if (acc.includes(el.category)) {
      return acc
    }
    return [...acc, el.category]
  }, ['all'])


  const handleFilter = (category: string) => {

    if (category === 'all') {
      setCards(data)
      return
    }
    setCards(data.filter((el: IEl) => el.category === category))
  }
  const filterVariants = {
    'hidden': {
      opacity: 0,
      // x: -1000
    },
    'visible': {
      opacity: 1,
      // x: 0
    },
    'exit': {
      opacity: 0,
      // x: -1000
    }
  }
  return (
    <>
      <motion.div>
        <motion.div style={{
          overflow: 'hidden',
          width: 200,
          border: '1px solid #ccc',
        }}>
          {
            btns.map((btn: any, index: number) => {
              return (
                <Button
                  isSelected={activeIndex === index}
                  key={btn}
                  text={btn}
                  handleClick={() => {handleFilter(btn); setActiveIndex(index)}}
                >
                </Button>
              )
            })
          }
        </motion.div>

        <motion.div
          style={{
            overflow: 'hidden',
            width: 200,
            borderBottom: '1px solid #ccc',
            borderLeft: '1px solid #ccc',
            borderRight: '1px solid #ccc',
          }}
        >

          <AnimatePresence exitBeforeEnter initial={false}>
            {
              cards.map((el: IEl) => {
                return (
                  <motion.div
                    key={el.title}
                    style={{
                      float: 'left',
                      backgroundColor: '#2196F3',
                      color: '#ffffff',
                      width: '100pv',
                      lineHeight: '100pv',
                      textAlign: 'center',
                      margin: '2px',
                    }}
                    variants={filterVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    transition={{ duration: .2 }}
                  >
                    {el.title}
                  </motion.div>
                )
              })
            }
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </>
  )
}

