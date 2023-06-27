"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"
import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  return (
    <Navbar expand="xl" className="bg-white navbar_wrapper">
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand><Link href="/"><Image className='nav-logo' width={300} height={77} src="/logo.png" alt="Jewelone Logo" /></Link></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto flex gap-4">
            <div>
            <Link href="/our-story">Our story</Link>
            </div>
            <div>
            <Link href="/what-we-have">what we have</Link>
            </div>
            <div>
            <Link href="/wedding-celebrations">wedding celebrations</Link>
            </div>
            <div>
            <Link href="/collections">collections</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="ml-auto d-flex gap-4">
           <div>
           <Link href="/search"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0083 18.8182L13.9925 14.6037M16.2179 8.97129C16.2179 11.0854 15.4163 13.1129 13.9893 14.6078C12.5624 16.1028 10.627 16.9426 8.60896 16.9426C6.59094 16.9426 4.65557 16.1028 3.22861 14.6078C1.80166 13.1129 1 11.0854 1 8.97129C1 6.85717 1.80166 4.82964 3.22861 3.33474C4.65557 1.83983 6.59094 1 8.60896 1C10.627 1 12.5624 1.83983 13.9893 3.33474C15.4163 4.82964 16.2179 6.85717 16.2179 8.97129Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
            </Link>
           </div>
            <div>
            <Link href="/account">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="black" stroke-width="2"/>
          <path d="M17.0001 14H17.3521C18.0831 14.0002 18.789 14.2674 19.337 14.7513C19.885 15.2352 20.2374 15.9026 20.3281 16.628L20.7191 19.752C20.7542 20.0334 20.7291 20.3191 20.6455 20.5901C20.5618 20.8611 20.4214 21.1112 20.2337 21.3238C20.046 21.5364 19.8152 21.7066 19.5566 21.8232C19.2981 21.9398 19.0177 22.0001 18.7341 22H5.26606C4.98244 22.0001 4.70206 21.9398 4.44351 21.8232C4.18496 21.7066 3.95416 21.5364 3.76644 21.3238C3.57871 21.1112 3.43835 20.8611 3.35467 20.5901C3.27098 20.3191 3.24589 20.0334 3.28106 19.752L3.67106 16.628C3.76176 15.9022 4.11448 15.2346 4.66289 14.7506C5.21131 14.2667 5.91764 13.9997 6.64906 14H7.00006" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

            </Link>
            </div>
            <div>
            <Link href="/cart"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.76465 7.08678H19.7256C20.0085 7.08679 20.2882 7.14607 20.5468 7.26081C20.8054 7.37555 21.037 7.5432 21.2268 7.75295C21.4166 7.9627 21.5604 8.20989 21.6488 8.4786C21.7373 8.7473 21.7684 9.03156 21.7403 9.31304L21.1328 15.3874C21.0829 15.887 20.8491 16.3503 20.4768 16.6872C20.1045 17.0241 19.6203 17.2107 19.1182 17.2107H9.44977C8.98151 17.2109 8.52766 17.0488 8.16549 16.752C7.80332 16.4552 7.55523 16.042 7.46345 15.5828L5.76465 7.08678Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
              <path d="M5.76461 7.08677L4.94457 3.80357C4.88972 3.58464 4.7633 3.39032 4.58538 3.25146C4.40745 3.11261 4.18823 3.03719 3.96254 3.03719H2.72742M8.8018 21.2603H10.8266M16.901 21.2603H18.9258" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </Link>
            </div>

      
          </div>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;