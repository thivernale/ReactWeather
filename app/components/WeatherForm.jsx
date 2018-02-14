var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        // prevent page from reloading
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';

            // call parent function (set as an attribute of component)
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <div style={{margin: '10px'}}>
              <form onSubmit={this.onFormSubmit}>
                <div>
                  <input type="text" placeholder="Enter city name" ref="location" style={{width: '100%'}} />
                </div>
                <div>
                  <button type="submit" style={{width: '100%'}}>Get Weather</button>
                </div>
              </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
