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

// now we use foundation styling
// but we use "className" attrubute instead of "class" for HTML classes 
// because otherwise there will be a collision with the jsx property with the same name
var Nav = React.createClass({
    // this can no longer be a presentational component as we are defining other methods in it
    onSearch: function(e) {
        // prevent the browser from refreshing the page
        // since we want to handle the submit ourselves
        e.preventDefault();
        //alert('Not yet wired up!');

        var location = this.refs.search.value;

        if (location.length > 0) {
            var encodedLocation = encodeURIComponent(location);

            // clear the search field value
            this.refs.search.value = '';

            // switch pages
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather by city" ref="search" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;

/*var old = (
    <div style={{ border: "1px solid #ff6600" }}>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
    </div>
);*/