'use client';
import React from 'react';
import styles from './gallery.module.css';
import Image from 'next/image';

export default function Gallery() {
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
  ];

  return (
    <div className={styles.container}>
      {/* Column 1 */}
      <div className={styles.gridContainer}>
        {images1.map((img, index) => (
          <div
            key={index}
            className={styles.gridItem}
            style={{ animationDelay: `${index * 0.2}s` }} // Apply animation delay dynamically
          >
            <Image src={img} width={300} height={300} alt={`Gallery Image ${index + 1}`} priority />
          </div>
        ))}
      </div>

      {/* Column 2 */}
      <div className={styles.gridContainer}>
        {images2.map((img, index) => (
          <div
            key={index}
            className={styles.gridItem}
            style={{ animationDelay: `${(index+1 ) * 0.2}s` }} // Continue delay sequence
          >
            <Image src={img} width={300} height={300} alt={`Gallery Image ${index + 1}`} priority />
          </div>
        ))}
      </div>
    </div>
  );
}
