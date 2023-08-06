// src/components/Portfolio.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Portfolio() {
  return (
    <main>
      <h1 class="fadein-f" id="portfolio">Portfolio</h1>
      <p class="fadein-s">
        Here are some of my notable works - a full list of projects are available on my GitHub page 
          <a href="https://github.com/gh120515">
          <FontAwesomeIcon class="icons" icon={faGithub} color="#4a4950"/>
          </a>. 
        Click on the image of each card to visit the deployed project, and the button to visit repository.
      </p>

      <div class="cards">

        <article class="card">
          <a href="https://renemalingre.github.io/Whiskers-of-Zen/">
            <img
              src='/images/woz.png'
              className="img"
              alt="Snippet of my first Group Project, Whiskers of Zen"
            />
          </a>
        <div class="text">
            <h3>Whiskers of Zen</h3>
            <p>A dog & cat image generator for lowering your stress.</p>
            <button>
              <a href="https://github.com/ReneMalingre/Whiskers-of-Zen" class="linkcolour">
                GitHub
                </a>
            </button>
        </div>
        </article>

        <article class="card">
          <a href="https://group-5-project-2-a67992c3b25e.herokuapp.com/">
            <img
              src='/images/eventify.png'
              className="img"
              alt="Snippet of my second Group Project, Eventify"
            />
          </a>
        <div class="text">
            <h3>Eventify</h3>
            <p>An event meetup & organisation webpage to host & discover events.</p>
            
            <button>
              <a href="https://github.com/AussieKing/eventify" class="linkcolour">
                GitHub
                </a>
            </button>
            
        </div>
        </article>

        <article class="card">
          <a href="https://gh120515-pwa-text-editor-3bfc0f3c0d5b.herokuapp.com/">
            <img
              src='/images/jate.png'
              className="img"
              alt="text editor app"
            />
          </a>
        <div class="text">
            <h3>Just Another Text Editor (J.A.T.E.)</h3>
            <p>Text editor app built using the principles of PWA (installable & available for offline use).</p>
            
            <button>
              <a href="https://github.com/gh120515/pwa-text-editor" class="linkcolour">
                GitHub
                </a>
            </button>
            
        </div>
        </article>

        <article class="card">
          <a href="https://gh120515.github.io/weather-dashboard-app/">
            <img
              src='/images/weather.png'
              className="img"
              alt="weather app"
            />
          </a>
        <div class="text">
            <h3>Weather dashboard</h3>
            <p>Simple weather app demonstrating third-party API calls.</p>
            
            <button>
              <a href="https://github.com/gh120515/weather-dashboard-app" class="linkcolour">
                GitHub
                </a>
            </button>
            
        </div>
        </article>

        <article class="card">
          <a href="https://drive.google.com/file/d/1PEyD-0p671BTedvW3UFJ3aibHdkqrGOI/view">
            <img
              src='/images/snsapi.png'
              className="img"
              alt="screenshot of backend of a social media app"
            />
          </a>
        <div class="text">
            <h3>E-Commerce Backend</h3>
            <p>JavaScript based app managing the back-end API of a social media website, using MongoDB to manage a NoSQL-based database. (Video demo only, no deployed app)</p>
      
            <button>
              <a href="https://github.com/gh120515/sns-api" class="linkcolour">
                GitHub
                </a>
            </button>
            
        </div>
        </article>

        <article class="card">
          <a href="https://drive.google.com/file/d/1-p3R-MD7fhIpPmZfMyJTWtXFjUtA1cv2/view">
            <img
              src='/images/ecommerce.png'
              className="img"
              alt="screenshot of backend of e-commerce app"
            />
          </a>
        <div class="text">
            <h3>SNS Backend API</h3>
            <p>JavaScript app managing the backend of an e-commerce website, built using the principles of ORM using Sequelize to manage a MySQL-based database. (Video demo only, no deployed app)</p>
      
            <button>
              <a href="https://github.com/gh120515/e-commerce-backend" class="linkcolour">
                GitHub
                </a>
            </button>
            
        </div>
        </article>

        </div>
    </main>  
  );
}