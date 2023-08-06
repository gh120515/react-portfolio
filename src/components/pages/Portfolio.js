// src/components/Portfolio.js
import React from "react";
// import { projects } from "../data";

export default function Portfolio() {
  return (
    <main>
      <article class="card">
            <img src="./assets/img/24m.jpeg" alt="Sample photo"></img>
        <div class="text">
            <h3>HTML</h3>
            <p>Click on the button to view a sample of my work on HTML.</p>
            <button onclick="window.location.href='#work-html'">Explore</button>
        </div>
        </article>
    </main>  
  );
}