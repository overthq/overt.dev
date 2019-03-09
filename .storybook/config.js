import { configure, addDecorator } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

setDefaults({
	inline: false,
	header: false,
	styles: { infoBody: { backgroundColor: '#F8F8F8' } }
});

addDecorator(withInfo);
addDecorator(withKnobs);
const req = require.context('../src/stories', true, /\.tsx$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
