import { useState } from 'react'
import { MenubarComponent } from '@/src/components/Menubar'
import { FloatingLinks } from '@/src/components/FloatingLinks'
import { Navbar } from '@/src/components/Navbar'

function App() {

  return (
    <>
     <Navbar/>
     {/* <MenubarComponent/> */}
     <FloatingLinks/>

     <main>
      
     </main>
    </>
  )
}

export default App
