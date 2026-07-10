import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/api/products').then(res => res.json()).then(setProducts);
  }, []);
  const whatsapp = '919614820656'; // Apna number daal de yahan

  return (
    <>
      <Head><title>AM PRINTS - Custom T-Shirts</title></Head>
      <main style={{padding: '20px', fontFamily: 'sans-serif'}}>
        <h1>AM PRINTS</h1>
        <p>Custom T-Shirt Printing</p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px'}}>
          {products.map(p => (
            <div key={p.id} style={{border: '1px solid #ddd', padding: '15px', borderRadius: '8px'}}>
              <img src={p.image} alt={p.name} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <a href={`https://wa.me/${whatsapp}?text=I want to buy ${p.name}`} target="_blank">
                <button style={{background: 'green', color: 'white', padding: '10px', border: 'none', width: '100%'}}>Order on WhatsApp</button>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
            }
