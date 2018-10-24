import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

const gran = React.createElement("p", {}, "Two grannies having the time of their life!");
const p = React.createElement("p", {}, "Passengers:");
const agnes = React.createElement('li', {}, "Agnes");
const muriel = React.createElement('li', {}, "Muriel");
const list = React.createElement("ul", {}, [agnes, muriel]);

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return React.createElement('div', {className: 'oldercoaster'}, [gran, p, list]);
  }
};

export class InFrontOfYou extends Component {
  // your code here
}

export class ButcherShop extends Component {
  // your code here
}


export class App extends Component {
  render() {
    return (
      <div id="app">

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
