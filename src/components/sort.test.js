import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import App from '../App';
import Age from './Age';
import Name from './Name';
import Points from './Points';
import Rank from './Rank';
import { configure } from 'enzyme';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router'
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {spy} from 'sinon';

configure({ adapter: new Adapter() });

describe("Test Sorting Components", () => {
  it('button click function should be passed as a prop to all', () => {
    let age = shallow(<Age />);
    expect(age.props()).toEqual({"children": "Age", "className": "btn btn-primary age", "name": "age", "onClick": undefined});
    let rank = shallow(<Rank />);
    expect(rank.props()).toEqual({"children": "Rank", "className": "btn btn-primary rank", "name": "rank", "onClick": undefined});
    let points = shallow(<Points />);
    expect(points.props()).toEqual({"children": "Points", "className": "btn btn-primary points", "name": "points", "onClick": undefined});
    let name = shallow(<Name />);
    expect(name.props()).toEqual({"children": "Name", "className": "btn btn-primary name", "name": "name", "onClick": undefined});

  });
});
