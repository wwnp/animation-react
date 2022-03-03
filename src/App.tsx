import React from 'react';
import { motion } from 'framer-motion';
import { Collapsible } from './components/Collapsible';
import { Filter } from './components/Filter';
import { Menu } from './components/Menu';
import { Loader } from './components/Loader';
import logo from './logo.svg'

const data = [
  {
    category: 'cars',
    title: 'BMW'
  },
  {
    category: 'cars',
    title: 'VOLVO'
  },
  {
    category: 'cars',
    title: 'Mustang'
  },
  {
    category: 'fruits',
    title: 'Melon'
  },
  {
    category: 'animals',
    title: 'Cat'
  },
  {
    category: 'animals',
    title: 'Dog'
  },
  {
    category: 'cars',
    title: 'asdasdasd'
  },
  {
    category: 'animals',
    title: 'Do232323g'
  },
  {
    category: 'animals',
    title: 'Dasdsadog'
  },
  {
    category: 'animals',
    title: 'aqweqwesd'
  },
  {
    category: 'animals',
    title: '1231'
  },
  {
    category: 'animals',
    title: 'qwe'
  },
]
function App() {
  const pVariants = {
    hidden: {
      x: -1000,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    }
  }
  const listVariants = {
    hidden: {
      opacity: 0,
      y: 500
    },
    visible: (i: any) => ({
      opacity: 1,
      transition: {
        duration: 1,
        delay: i * 0.5
      },
      y: 0
    }),

  }
  const items = ['Text 1 ', 'Text 2', 'Text 3']
  return (
    <div className="App">
      <header className="App-header">
        <motion.img
          width={150}
          height={150}
          src={logo}
          className="App-logo"
          alt="logo"
          animate={{ rotate: 360 }}
          transition={{
            delay: 0,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0,
            repeatType: 'reverse',
            type: 'tween',
            ease: 'easeInOut'
          }}
        />
        <motion.p
          style={{
            textAlign: 'center'
          }}
          initial={pVariants.hidden}
          animate={pVariants.visible}
          transition={{
            delay: 0.5,
            duration: .7
          }}
          variants={pVariants}
        >
          Sex
        </motion.p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.a
            className='App-link'
            href='/'
            whileHover={{
              scale: 1.5,
              color: 'black'
            }}
            style={{
              display: 'inline-block',
              margin: '0 auto'
            }}
          >
            Link
          </motion.a>
        </div>
        {
          items.map((el, index) => {
            return (
              <motion.li
                variants={listVariants}
                initial='hidden'
                animate='visible'
                custom={index}
                key={el}
              >
                {el}
              </motion.li>
            )
          })
        }
        {/* LESSON 2 ========================== */}
        <Collapsible title='Toggle content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit dolore fugit recusandae nemo cupiditate ratione ut veniam repudiandae minima vero sunt praesentium, vitae pariatur. Eligendi minima perspiciatis debitis quidem.
        </Collapsible>

        <Filter data={data}></Filter>

        {/* LESSON 3 ========================== */}
        <Menu></Menu>

        {/* OTHER ========================== */}
        <Loader color='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'></Loader>
      </header>
    </div>
  );
}
export default App;



