// src/components/Footer.js
import React from 'react';
import dayjs from 'dayjs';
import DayJS from 'react-dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    const date = dayjs();
    return (
        <footer>
                <p>Website made by Lauren Cho © <DayJS format='YYYY'>{ date }</DayJS></p>
                <div>
                    <a href="https://github.com/gh120515">
                    <FontAwesomeIcon class="icons" icon={faGithub} color="#4a4950"/>
                    </a> 
                    {/* link to be added */}
                    <a href="">
                    <FontAwesomeIcon class="icons" icon={faLinkedinIn} color="#4a4950"/>
                    </a> 
                    {/* link to be added */}
                    <a href="">
                    <FontAwesomeIcon class="icons" icon={faTwitter} color="#4a4950"/>
                    </a> 
                </div>
        </footer>
    );
  }


