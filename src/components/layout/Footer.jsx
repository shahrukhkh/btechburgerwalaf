import React from 'react';
import {AiFillInstagram,AiFillYoutube,AiFillGithub} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>BTECH Burger Wala</h2>

            <p>We are trying to give you the best taste possible.</p>
            <br />
            <em>We give attention to genuine feedback.</em>
            <strong>All right received @btechburgerwala</strong>
        </div>

        <aside>
            <h4>Follow us</h4>
            <a href='https://youtube.com/@ShAhRuKhKhAn-rc2of'><AiFillYoutube/></a>
            <a href='https://instagram.com/itshahrukhan'><AiFillInstagram/></a>
            <a href='https://youtube.com/itshahrukhan'><AiFillGithub/></a>

        </aside>
    </footer>
  )
}

export default Footer
