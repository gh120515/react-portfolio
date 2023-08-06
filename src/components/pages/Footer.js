// src/components/Footer.js
import React from 'react';
import dayjs from 'dayjs';
import DayJS from 'react-dayjs';

export default function Footer() {
    const date = dayjs();
    return (
        <footer>
            <div>
                <p>Website made by Lauren Cho © <DayJS format='YYYY'>{ date }</DayJS></p>
            </div>
        </footer>
    );
  }


