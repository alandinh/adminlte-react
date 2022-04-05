/* eslint-disable prettier/prettier */
import React from 'react';
// import {useTranslation} from 'react-i18next';
import { DateTime } from 'luxon';

const Footer = () => {
  // const [t] = useTranslation();

  return (
    <footer className="main-footer">
      <strong>
        <span>Copyright © {DateTime.now().toFormat('y')} </span>
        {/* <a href="https://erdkse.com" target="_blank" rel="noopener noreferrer">
          erdkse.com
        </a> */}
        MetaxyFighter
      </strong>
    </footer>
  );
};

export default Footer;
