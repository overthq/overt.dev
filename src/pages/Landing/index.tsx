import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import styles from "./Landing.module.scss";
import classnames from "classnames";
import logo from "../../assets/images/overtlogo.svg";
import { useSpring, animated } from "react-spring";

const Hero = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
`;

const SupportingText = styled.p`
  font-size: 18px;
  max-width: 580px;
  line-height: 1.6;
`;

const Button = styled.button`
  height: 60px;
  width: 200px;
  border-radius: 5px;
  background-color: #000000;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

interface LinkType {
  url: string;
  label: string;
}

const links: LinkType[] = [
  {
    url: "https://github.com/overthq",
    label: "GitHub"
  },
  {
    url: "#",
    label: "Careers"
  },
  {
    url: "/about-us",
    label: "About Us"
  }
];

const NewLanding = () => {
  const [active, setActive] = React.useState(false);
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Hero>
      <div>
        <nav>
          <span
            className={styles.navbarToggle}
            onClick={() => setActive(!active)}
          />
          <a href="/" className={styles.logo}>
            <img src={logo} alt="" style={{ zoom: 0.07 }} />
          </a>
          <ul
            className={classnames(styles.mainNav, {
              [styles.active]: active
            })}
            id="js-menu"
          >
            {links.map((link: LinkType, index: number) => (
              <li key={index}>
                <Link to={link.url} className={styles.navLinks}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <animated.div
        className={styles.hero}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          ...springProps
        }}
      >
        <h1 style={{ fontSize: 40 }}>The future is open-source.</h1>
        <br />
        <SupportingText>
          Overt creates open-source solutions to the world's pressing issues.
        </SupportingText>
        <br />
        <br />
        <a href="/" style={{ textDecoration: "none", width: "200px" }}>
          <Button>Learn More</Button>
        </a>
      </animated.div>
      <div />
    </Hero>
  );
};

export default NewLanding;
