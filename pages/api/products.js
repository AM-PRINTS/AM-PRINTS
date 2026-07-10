import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'products.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.status(200).json(data);
  } 
  else if (req.method === 'POST') {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const newProduct = { id: Date.now(), ...req.body };
    data.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.status(201).json(newProduct);
  }
}
