import React, { FC } from 'react'
import './footer.scss'
import footerImg from '../../assets/footerImg.svg'

const Footer:FC = () => {
  return (
    <footer>
      <div className="footer container">
        <h2>наши бренды</h2>
        <div className="footer__cards">
          <img src={footerImg} alt="" />
          <img src={footerImg} alt="" />
          <img src={footerImg} alt="" />
          <img src={footerImg} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer