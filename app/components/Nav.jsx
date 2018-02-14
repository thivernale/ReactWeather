var React = require('react');
// component for creation of links for routing
var { Link, IndexLink } = require('react-router');

/*var Nav = React.createClass({
    render: function() {
        return (
            <div style={{ border: "1px solid #ff6600" }}>
                <h2>Nav Component</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
            </div>
        );
    }
});*/

var Nav = (props) => {
    return (
        <div style={{ border: "1px solid #ff6600" }}>
            <h2>Nav Component</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
            <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
        </div>
    );
};

module.exports = Nav;
