import React, { useState, useEffect } from 'react';
import './Footer.scss';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const Footer = () => {

  const [y, setY] = useState(window.scrollY);
  // const [h] = useState(document.documentElement.scrollHeight)
  // const h = document.documentElement.scrollHeight

  window.addEventListener("scroll", () => setY(window.scrollY))

  const backToTop = () => {
    window.scrollTo(0, 0)
  }
  //  console.log(document.documentElement.scrollHeight)

  return (
    <>
      {y > 80 && (
        <IoIosArrowDropupCircle size={30} className="bkTop" onClick={backToTop} />
      )}
      <footer><p>Copyright 2021 by Miyabi Tanimichi | Taichi Ishiguro | Kit So. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Footer;


  // useEffect(() => {
  //   setY(window.scrollY)
  // }, [y])

  // console.log(y) 

  // const handleNavigation = () => {
  //   // const window = e.currentTarget;
  //   // if (y > window.scrollY) {
  //   //   console.log("scrolling up",y);
  //   // } else if (y < window.scrollY) {
  //   //   console.log("scrolling down",y);
  //   // }
  //   setY(window.scrollY);
  // };