import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import {BsSpeedometer2,BsHeart} from "react-icons/bs"
import {GrLocation,GrCart} from "react-icons/gr"
import {FaUserAlt} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav>
        <Container>
          <ul>
            <li><Link to={"/"}>Магазины</Link> </li>
            <li><Link to={"/"}>Акции</Link> </li>
            <li><Link to={"/"}>Доставка и оплата</Link> </li>
            <li>
                <div className="nav_speed">
                    <span>
                        <BsSpeedometer2 />
                    </span>
                    <span>DRIVE MOTO</span>
                </div>
            </li>
            <li>
                <span><GrLocation /></span>
                <span>Москва,  ул. Науки  25</span>
            </li>
            <li className="nav_tool">
                <span><BsHeart /></span>
                <span><FaUserAlt /></span>
                <span><GrCart /></span>
            </li>
          </ul>
        </Container>
    </nav>
  )
}

export default Navbar;