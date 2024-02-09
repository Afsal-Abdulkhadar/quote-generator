import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <h2 className='fw-bold'><i class="fa-solid fa-quote-left"></i> Random Quote Generator</h2>
    
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header