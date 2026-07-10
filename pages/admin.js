import { useState } from 'react';
import Head from 'next/head';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleLogin = () => {
    if (password === 'amprints2026') setLoggedIn(true);
    else alert('Wrong password');
  };

  const handleAdd = async () => {
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, image })
    });
    alert('T-shirt Added!');
    setName(''); setPrice(''); setImage('');
  };

  if (!loggedIn) return (
    <div style={{padding: '50px', textAlign: 'center'}}>
      <h2>AM PRINTS Admin Login</h2>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );

  return (
    <>
      <Head><title>Admin - AM PRINTS</title></Head>
      <div style={{padding: '20px', maxWidth: '500px', margin: 'auto'}}>
        <h1>Add New T-Shirt</h1>
        <input placeholder="T-Shirt Name" value={name} onChange={e => setName(e.target.value)} style={{width: '100%', padding: '10px', margin: '5px 0'}} />
        <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} style={{width: '100%', padding: '10px', margin: '5px 0'}} />
        <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} style={{width: '100%', padding: '10px', margin: '5px 0'}} />
        <button onClick={handleAdd} style={{width: '100%', padding: '10px', background: 'black', color: 'white'}}>Add Product</button>
      </div>
    </>
  );
  }
