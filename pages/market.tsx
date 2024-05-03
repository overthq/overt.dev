import Head from 'next/head';

const Market = () => {
	return (
		<main
			style={{
				maxWidth: 700,
				width: '100%',
				margin: '0 auto',
				fontSize: 18,
				fontFamily: 'Georgia',
				color: '#2d2d2d',
				lineHeight: '36px',
				padding: '0 15px',
				overflowY: 'scroll',
			}}
		>
			<Head>
				<title>Introducing Market</title>
				<meta name='title' content='Introducing Market' />
				<meta
					name='description'
					content='Market is a new mobile e-commerce solution for Nigerians.'
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://overt.dev/market' />
				<meta property='og:title' content='Introducing Market' />
				<meta
					property='og:description'
					content='Market is a new mobile e-commerce solution for Nigerians.'
				/>
				<meta
					property='og:image'
					content='https://overt.dev/static/introducing-market.jpeg'
				/>

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://overt.dev/market' />
				<meta property='twitter:title' content='Introducing Market' />
				<meta
					property='twitter:description'
					content='Market is a new mobile e-commerce solution for Nigerians.'
				/>
				<meta
					property='twitter:image'
					content='https://overt.dev/static/introducing-market.jpeg'
				/>
			</Head>
			<p>
				The online shopping experience in Nigeria today is much worse than it
				could be. From discovering and curating a list of trusted vendors across
				multiple social networks, to sending payment confirmations via DM, the
				average user's shopping experience is needlessly fragmented and overly
				manual. Market solves this problem by providing a single interface to
				manage your entire shopping experience. Discover and follow stores,
				place and track orders and more, all in one place.
			</p>
			<p>
				In addition to this, Market keeps you notified about activity from your
				followed stores, allowing you to know when items are back in stock or
				when new products arrive. Our explore page is the perfect place to find
				trending stores and recommended products.
			</p>
			<p>
				For merchants, we provide a simple-yet-powerful mobile experience that
				makes it painless to set up your store and manage your inventory,
				orders, payouts and analytics.
			</p>
			<p>
				We're currently preparing an alpha release that will feature a few
				retail brands and ~100 shoppers. Sign up on the waitlist{' '}
				<a
					style={{
						textDecoration: 'none',
						borderBottom: '1px dotted #505050',
						color: 'inherit',
						lineHeight: '18px',
					}}
					href='https://forms.gle/k1VvGtaknnT6jSRU7'
					target='_blank'
				>
					here
				</a>{' '}
				to gain access.
			</p>
			<p>- Oluwakorede Fashokun</p>
		</main>
	);
};

export default Market;
