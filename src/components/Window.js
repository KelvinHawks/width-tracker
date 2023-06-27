import React, {useState, useEffect} from 'react'
import Button from "./button"
import './Window.css'

function Window() {
    const [show, setShow] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
   useEffect(()=>{
    function watchWidth(){
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", watchWidth)
   
    return ()=>{
      window.removeEventListener('resize', watchWidth)
    }
   },[])

    function toggleShow(){
        setShow(prevSetup => !prevSetup)
    }
  return (
    <div className='window-width'>
        <Button onClick={toggleShow}>Toggle window tracker</Button>
        {show && <h1 className='toggle-header' >Window Width: {windowWidth}</h1>}
        
    </div>
  )
}

export default Window