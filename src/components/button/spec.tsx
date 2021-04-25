import { h } from 'preact';
import { Button } from '.';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Button', () => {
    test('Button has correct label', () => {
        const EXPECTED = 'test';
        const context = shallow(<Button label={EXPECTED} />);
        expect(context.find('button').text()).toBe(EXPECTED);
    });
});
