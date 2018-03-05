var React = require('react');

/*var WeatherMessage = React.createClass({
    render: function() {
        var {temp, location} = this.props;
        return (
            <div>
              <h3>It's {temp} in {location}</h3>
            </div>
        );
    }
});
*/

// we can destructure "props" right in the input params without the necessity to assign needed elements to variables
var WeatherMessage = ({ temp, location }) => {
    // see input params above
    //var { temp, location } = props;
    return (
        <div>
            <h3 className="text-center">It's {temp} in <span style={{ color: 'green' }}>{location}</span></h3>
        </div>
    );
};

module.exports = WeatherMessage;
