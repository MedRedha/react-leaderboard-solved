import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import App from "./App";
import { configure } from "enzyme";
import { Link } from "react-router-dom";
import { MemoryRouter } from "react-router";
import Adapter from "enzyme-adapter-react-16";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import { spy } from "sinon";

configure({ adapter: new Adapter() });

describe("Test AppComponent", () => {
  it("check state changes", () => {
    let wrapper = mount(<App />);
    wrapper.instance().handleClickAge();
    expect(wrapper.state().sortBy).toEqual("age");
    wrapper.instance().handleClickName();
    expect(wrapper.state().sortBy).toEqual("name");
    wrapper.instance().handleClickPoints();
    expect(wrapper.state().sortBy).toEqual("points");
    wrapper.instance().handleClickRank();
    expect(wrapper.state().sortBy).toEqual("rank");
  });

  it("check table rendering", () => {
    let wrapper = mount(<App />);
    wrapper.instance().handleClickAge();
    let table = wrapper.find("table");
    expect(table.html().toString()).toEqual(
      '<table class="table table-striped"><thead><tr><th>Age</th><th>Name</th><th>Points</th><th>Rank</th></tr></thead><tbody><tr><td>10</td><td>Michael E. Rogers</td><td>274</td><td>7</td></tr><tr><td>11</td><td>Richard M. Mass</td><td>312</td><td>14</td></tr><tr><td>13</td><td>Joan T. Covert</td><td>3124</td><td>13</td></tr><tr><td>15</td><td>Elizabeth R. Olsen</td><td>452</td><td>9</td></tr><tr><td>17</td><td>Camille B. Burton</td><td>654645</td><td>15</td></tr><tr><td>18</td><td>Tommye R. Robinson</td><td>5345345</td><td>4</td></tr><tr><td>19</td><td>Grace C. Smith</td><td>342</td><td>17</td></tr><tr><td>20</td><td>Jennifer C. West</td><td>213</td><td>22</td></tr><tr><td>21</td><td>John L. Sandlin</td><td>34242</td><td>25</td></tr><tr><td>22</td><td>Joseph J. Freeman</td><td>354</td><td>8</td></tr><tr><td>23</td><td>Joseph S. Perez</td><td>31</td><td>20</td></tr><tr><td>24</td><td>John R. Green</td><td>6546</td><td>19</td></tr><tr><td>25</td><td>Sharon R. Ryan</td><td>134</td><td>1</td></tr><tr><td>29</td><td>Arlene R. Grimes</td><td>7675</td><td>6</td></tr><tr><td>30</td><td>Stacey D. Ward</td><td>64563</td><td>24</td></tr><tr><td>32</td><td>Thomas M. Hawkins</td><td>42342</td><td>5</td></tr><tr><td>33</td><td>Dorothy J. Carroll</td><td>42342</td><td>18</td></tr><tr><td>35</td><td>George K. Pancoast</td><td>755463</td><td>2</td></tr><tr><td>37</td><td>Alice J. Goldsmith</td><td>105</td><td>12</td></tr><tr><td>39</td><td>Felix M. Seeber</td><td>103596</td><td>11</td></tr><tr><td>40</td><td>Robert O. Lambert</td><td>18978</td><td>16</td></tr><tr><td>41</td><td>Marlana J. Huff</td><td>3123</td><td>3</td></tr><tr><td>42</td><td>Susan D. Jimenez</td><td>45345</td><td>10</td></tr><tr><td>43</td><td>Margarita D. Lambert</td><td>52342</td><td>21</td></tr><tr><td>65</td><td>Louis E. McCrae</td><td>1241</td><td>23</td></tr></tbody></table>'
    );
    wrapper.instance().handleClickPoints();
    let table2 = wrapper.find("table");
    expect(table2.html().toString()).toEqual(
      '<table class="table table-striped"><thead><tr><th>Age</th><th>Name</th><th>Points</th><th>Rank</th></tr></thead><tbody><tr><td>23</td><td>Joseph S. Perez</td><td>31</td><td>20</td></tr><tr><td>37</td><td>Alice J. Goldsmith</td><td>105</td><td>12</td></tr><tr><td>25</td><td>Sharon R. Ryan</td><td>134</td><td>1</td></tr><tr><td>20</td><td>Jennifer C. West</td><td>213</td><td>22</td></tr><tr><td>10</td><td>Michael E. Rogers</td><td>274</td><td>7</td></tr><tr><td>11</td><td>Richard M. Mass</td><td>312</td><td>14</td></tr><tr><td>19</td><td>Grace C. Smith</td><td>342</td><td>17</td></tr><tr><td>22</td><td>Joseph J. Freeman</td><td>354</td><td>8</td></tr><tr><td>15</td><td>Elizabeth R. Olsen</td><td>452</td><td>9</td></tr><tr><td>65</td><td>Louis E. McCrae</td><td>1241</td><td>23</td></tr><tr><td>41</td><td>Marlana J. Huff</td><td>3123</td><td>3</td></tr><tr><td>13</td><td>Joan T. Covert</td><td>3124</td><td>13</td></tr><tr><td>24</td><td>John R. Green</td><td>6546</td><td>19</td></tr><tr><td>29</td><td>Arlene R. Grimes</td><td>7675</td><td>6</td></tr><tr><td>40</td><td>Robert O. Lambert</td><td>18978</td><td>16</td></tr><tr><td>21</td><td>John L. Sandlin</td><td>34242</td><td>25</td></tr><tr><td>33</td><td>Dorothy J. Carroll</td><td>42342</td><td>18</td></tr><tr><td>32</td><td>Thomas M. Hawkins</td><td>42342</td><td>5</td></tr><tr><td>42</td><td>Susan D. Jimenez</td><td>45345</td><td>10</td></tr><tr><td>43</td><td>Margarita D. Lambert</td><td>52342</td><td>21</td></tr><tr><td>30</td><td>Stacey D. Ward</td><td>64563</td><td>24</td></tr><tr><td>39</td><td>Felix M. Seeber</td><td>103596</td><td>11</td></tr><tr><td>17</td><td>Camille B. Burton</td><td>654645</td><td>15</td></tr><tr><td>35</td><td>George K. Pancoast</td><td>755463</td><td>2</td></tr><tr><td>18</td><td>Tommye R. Robinson</td><td>5345345</td><td>4</td></tr></tbody></table>'
    );
  });
});
