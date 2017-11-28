import '../css/main.scss';
import { RandomGenerator } from './random-generator';

// require('../css/main.scss');

// const outputParagraph = document.querySelector('#outputParagraph');

// const outputRandomInt = () => {
//     outputParagraph.textContent = RandomGenerator.randomInteger();
// };

// const outputRandomRange = () => {
//     outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
// }

// const buttonRndInt = document.querySelector('#randomInt');
// const buttonRndRange = document.querySelector('#randomRange');

// buttonRndInt.addEventListener('click', outputRandomInt);
// buttonRndRange.addEventListener('click', outputRandomRange);

// const beer = document.querySelector('#beer');
// beer.className += "fa fa-beer";

import React, { Component } from "react";
import { render } from "react-dom";

import Banner from '../components/Banner';

class App extends Component {

    render () {

        return (

            <div>
                <Banner name="entropy"/>
                <div id="randomInt">hello</div>
                <div>there</div>
                <ul>
                    <li class="fa fa-beer fa-5x">lagger</li>
                    <li>delirium</li>
                    <li>kolos 3</li>

                </ul>
            </div>

            )
    }
}

render(<App />, document.getElementById('app'));
