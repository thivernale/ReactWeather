var React = require('react');
var ReactDOM = require('react-dom');

/****************************************************/
// ES6 stuff:
//
// object spread operator
// but babel does not know what to do with the dots code
// we need to install an additional plugin and add it to webpack config presets:
// npm install babel-preset-stage-0 --save-dev

var objOne = {
    name: 'some name',
    location: 'some location'
}, objTwo = {
    age: 23,
    ...objOne
};
//console.log(objTwo);

// install react-router module as a dependency:
// npm install react-router@2.0.0 --save
/****************************************************/

// load everything we need from the react-router module:
// (using ES6 destructuring syntax)
// the first 3 are components provided by the react-router library
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
// (same as using ES5:)
//var Route = require('react-router').Route;
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
// but require itself does not know how to load a css file so we need to use the css-loader;
// we also need to inject it into the html, adding style-loader first
require('style!css!foundation-sites/dist/foundation.min.css');

// fire up foundation
$(document).foundation();

// App css - load it with an alias defined in webpack.config.js because the location might be subject to change
require('style!css!sass!applicationStyles');

// we created a SPA (single-page application) that has multiple pages defined by routes
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
            <IndexRoute component={Weather} />
        </Route>
    </Router>,
    document.getElementById('app')
);
