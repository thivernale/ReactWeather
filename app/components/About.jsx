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
            <h3>About</h3>
            <p>Welcome to About page!</p>
        </div>
    );
};

module.exports = About;
