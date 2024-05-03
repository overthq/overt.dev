import Head from 'next/head';

const Market = () => {
	return (
		<main>
			<style jsx global>{`
				main {
					max-width: 700px;
					width: 100%;
					margin: 0 auto;
					font-size: 18px;
					font-family: Georgia;
					color: #2d2d2d;
					line-height: 36px;
					padding: 0 15px;
					overflow-y: scroll;
				}

				.links-container {
					display: flex;
					justify-content: center;
					margin: 20px 0;
				}

				a {
					text-decoration: none;
					border-bottom: 1px dotted #505050;
					color: inherit;
					line-height: 18px;
				}

				.link {
					margin: 0 15px;
				}
			`}</style>
			<Head>
				<title>Introducing Market</title>
				<meta
					name='description'
					content='Market is a new mobile e-commerce solution for Nigerians.'
				/>
				<meta name='og:image' content='static/introducing-market.jpeg' />
				<meta name='og:image:type' content='image/jpeg' />
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
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
				<a href='https://forms.gle/k1VvGtaknnT6jSRU7' target='_blank'>
					here
				</a>{' '}
				to gain access.
			</p>
			<p>- Oluwakorede Fashokun</p>
		</main>
	);
};

export default Market;
