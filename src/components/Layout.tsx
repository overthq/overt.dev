import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

const Logo = styled.img`
	width: 100px;
	height: auto;
	filter: invert(1);
`;

const NavigationContainer = styled.nav`
	display: flex;
	padding: 20px;
	background-color: #000000;
`;

const NavigationBar = () => (
	<NavigationContainer>
		<a href='/'>
			<Logo src='/static/images/overtlogo.svg' alt='Overt Logo' />
		</a>
	</NavigationContainer>
);

// This page will also receive the meta configuration.
const Layout: React.FC = ({ children }) => (
	<>
		<Head>
			<Meta />
		</Head>
		<style jsx global>{`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			h1,
			h2,
			h3,
			h4,
			h5 {
				font-family: 'Baskervville', serif;
			}

			a,
			span,
			p,
			strong,
			b,
			button {
				font-family: 'Rubik', sans-serif;
			}
		`}</style>
		<NavigationBar />
		{children}
		<Footer />
	</>
);

export default Layout;
