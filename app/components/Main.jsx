var React = require('react');
var Nav = require('Nav');

/*var Main = React.createClass({
    render: function() {
        return (
            <div>
              <Nav/>
              <h1>Get Weather</h1>
              {this.props.children}
            </div>
        );
    }
});*/

// props is passed as a parameter and should be used without "this"
var Main = (props) => {
    return (
        <div>
            <Nav />
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;
