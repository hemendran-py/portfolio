'use client';
import React from 'react';
import styles from './gallery.module.css'; // Assuming you're using a separate CSS file for styles

import Image from 'next/image';
export default function Gallery() {
  // List of images in the public/images folder
  const images1 = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/q2.jpg',
    '/images/img6.jpg',

    
  ];
  const images2 = [
    '/images/img7.jpg',
    '/images/img8.jpg',
    '/images/img9.jpg',
    '/images/img10.jpg',
    '/images/img11.jpg',
    '/images/img12.jpg',

  ]

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {images1.map((img, index) => (
          <div key={index} className={styles.gridItem}>
            <Image src={img} width={500} height={500} alt={`Gallery Image ${index + 1}`} priority/>
          </div>
        ))}
      </div>
      <div className={styles.gridContainer}>
        {images2.map((img, index) => (
          <div key={index} className={styles.gridItem}>
            <Image src={img} width={500} height={500} alt={`Gallery Image ${index + 1}`} priority/>
          </div>
        ))}
      </div>
     
      
    </div>
    
  );
}
