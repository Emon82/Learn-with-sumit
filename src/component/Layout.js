import React from 'react';
import '../Styles/Layout.modul.css';
import Nav from './Nav';
export default function Layout({children}) {
  return (
    <div>
        <Nav/>
        <main className="main">
<div className="container">
    {children}

</div>
        
        </main>
    </div>
  )
}
