import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
        <p>
        Downloadable resume coming soon!
        </p>

        <button type="button" class="btn btn-info"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            Download (coming soon)
        </button>
    
      <div class="card">
        <div class="card-header">
          Featured skills
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">HTML, CSS, JavaScript</li>
          <li class="list-group-item">Node.js</li>
          <li class="list-group-item">Express</li>
          <li class="list-group-item">Express</li>
          <li class="list-group-item">SQL (MySql), Sequelize</li>
          <li class="list-group-item">NoSQL (MongoDB)</li>
          <li class="list-group-item">OOP</li>
          <li class="list-group-item">ORM</li>
          <li class="list-group-item">MVC (e.g. Handlebar.js)</li>
          <li class="list-group-item">PWA</li>
          <li class="list-group-item">React & MERN</li>
          <li class="list-group-item">State</li>
        </ul>
      </div>

    </div>
  );
}
