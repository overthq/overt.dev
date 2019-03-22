import heroImage from '../../assets/heroimage.svg';

const styles = {
  sectionParagraph: {
		fontSize: 20,
		color: '#FFFFFF',
		lineHeight: 1.5
	},
	aboutUs: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		height: '100%',
		width: '100%',
		padding: '40px 0 40px 0',
		minHeight: '60vh'
	},
	heroMain: (springProps: any) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundImage: `url(${heroImage})`,
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'right center',
		backgroundSize: '600px auto',
		...springProps
	}),
	sectionHeader: {
		fontWeight: 700,
		color: '#FFFFFF',
		fontSize: 40
	}
};

export default styles;
