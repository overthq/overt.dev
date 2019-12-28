import React from 'react';

const Meta = () => (
	<>
		<script
			async
			src='https://www.googletagmanager.com/gtag/js?id=UA-136875969-1'
		/>
		<script
			dangerouslySetInnerHTML={{
				__html: `
				 window.dataLayer = window.dataLayer || [];
				 function gtag() {
					 dataLayer.push(arguments);
				 }
				 gtag('js', new Date());
				 gtag('config', 'UA-136875969-1');
        `
			}}
		/>
		<meta charSet='utf-8' />
		<link rel='shortcut icon' href='/static/favicon.ico' />
		<link rel='canonical' href='https://overt.dev/' />
		<link
			href='https://fonts.googleapis.com/css?family=Karla:400,700'
			rel='stylesheet'
		/>
		<link
			href='https://fonts.googleapis.com/css?family=Baskervville&display=swap'
			rel='stylesheet'
		/>
		<link
			href='https://fonts.googleapis.com/css?family=Rubik:300&display=swap'
			rel='stylesheet'
		/>
		<link
			href='https://fonts.googleapis.com/css?family=Courier+Prime:400,700&display=swap'
			rel='stylesheet'
		/>
		<meta
			name='viewport'
			content='width=device-width, initial-scale=1, shrink-to-fit=no'
		/>
		<meta name='theme-color' content='#000000' />
		<meta name='robots' content='index, follow' />
		<meta charSet='utf-8' />

		<meta name='description' content='The future is open-source.' />
		<meta name='image' content='https://overt.dev/logo.png' />

		<meta itemProp='name' content='Overt' />
		<meta itemProp='description' content='The future is open-source.' />
		<meta itemProp='image' content='https://overt.dev/logo.png' />

		<meta name='twitter:card' content='summary' />
		<meta name='twitter:title' content='Overt' />
		<meta name='twitter:description' content='The future is open-source.' />
		<meta name='twitter:site' content='@overt_hq' />

		<meta name='og:title' content='Overt' />
		<meta name='og:description' content='The future is open-source.' />
		<meta name='og:image' content='https://overt.dev/logo.png' />
		<meta name='og:url' content='https://overt.dev' />
		<meta name='og:site_name' content='Overt' />
		<meta name='og:type' content='website' />

		<title>Overt</title>
	</>
);

export default Meta;
