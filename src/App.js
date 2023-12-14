import React from 'react';
import './App.css'
import Card from './Components/Card.js'
import tiers from './data.js'

export default function App() {
  const cards = tiers.map((tier, index) => (
    <Card 
      key={index}
      {...tier}

    />
  ))
  return (
    <div className="container">
      <h1 class="title">React Price Card Task</h1>
      <main className="card-container">
        { cards }
      </main>
    </div>
  )
}