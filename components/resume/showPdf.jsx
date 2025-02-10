"use client";


import React from 'react';

const ShowPdf = () => {
  const handleClick = () => {
    // Open the PDF in a new tab
    window.open('/resume/Hemendran_resume.pdf', '_blank'); // Path to your PDF file
  };

  return (
    <div  
      onClick={handleClick}
      style={{
        cursor: 'pointer'
        
        
      }}
      className='item items-9  effects font-bold'
    >
        < img src="/cv.svg" className="resume" />
        
        
        <p>Read CV</p>
      
    </div>
  );
};

export default ShowPdf;
