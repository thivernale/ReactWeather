/**
 * This is a basic presentational component that does not have any state.
 * It only has a render method that displays something.
 * In this case stateless functional components can be used instead.
 */

var React = require('react');

/*var About = React.createClass({
    render: function() {
        return (
            <h3>About Component</h3>
        );
    }
});*/

// just create a function instead of a class with render method only:
// now we have a very simple stateless functional component
var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>
                A weather application built on React. Part of The Complete React Web App Course.
            </p>
            <p>
                Some of the tools used:
            </p>
            <ul>
                <ol>
                    <li>
                        <a href="https://reactjs.org/">React</a> - JavaScript framework used
                    </li>
                    <li>
                        <a href="http://openweathermap.org/">Open Weather Map</a> - API used to search for weather by city name
                    </li>
                </ol>
            </ul>
        </div>
    );
};

module.exports = About;
