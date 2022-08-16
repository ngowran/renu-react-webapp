import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { Link } from 'react-router-dom';
import '../baseStyle.css';

const Item = styled('div')(({ theme }) => ({
    
    height: "160px",
    textAlign: 'center',
    margin: "auto",
  }));

function Home() {
    return (
      <div className='main-theme'>
  <div className="container">
    <header className="pb-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
        <span className="fs-4">Welcome!</span>
      </a>
    </header>

    <div className="p-5 mb-4 section rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Renu Ireland</h1>
        <p className="col-md-8 fs-4">The smart way to compost.<br/>Welcome to Renu Ireland! Check out our blogs below.</p>
        <Link className="btn headers dark-green btn-lg" to="/blog">Check out our free blogs!</Link>

      </div>
    </div>

    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 dark-section rounded-3">
          <h2>Change the background</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button className="btn btn-outline-light" type="button">Example button</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 light-section border rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button className="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
    </div>
    </div>
    </div>

    );
};

export default Home;