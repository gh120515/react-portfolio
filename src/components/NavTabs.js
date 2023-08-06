import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (

    <nav class="navbar bg-body-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><span class="name">Lauren Cho</span></a>
        <div  id="navbarNav" >
          <ul class="navbar-nav" className="nav nav-tabs">
            <li class="nav-item">
              <a className=
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              {currentPage === 'About' ? 'nav-link active' : 'nav-link text-reset'}
              aria-current="page" 
              href="#about"
              onClick={() => handlePageChange('About')}
              >About</a>
            </li>
            <li class="nav-item">
              <a className=
              {currentPage === 'Resume' ? 'nav-link active' : 'nav-link text-reset'}
              aria-current="page" 
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              >Resume</a>
            </li>
            <li class="nav-item">
              <a className=
              {currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link text-reset'}
              aria-current="page" 
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              >Portfolio</a>
            </li>
            <li class="nav-item">
              <a className=
              {currentPage === 'Contact' ? 'nav-link active' : 'nav-link text-reset'}
              aria-current="page" 
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              >Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
