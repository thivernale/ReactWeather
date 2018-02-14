var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    // built-in method called automatically
    getInitialState: function() {
        // mock initial state
        /*return {
            location: 'Miami',
            temp: 88
        };*/
        // intial state of data used for showing "loading..." indicator while API request is executed
        return {
            isLoading: false
        };
    },
    handleSearch: function(location) {
        // mock handling
        /*this.setState({
            location: location,
            temp: 23
        });*/
        var that = this;

        // before sending request:
        this.setState({ isLoading: true });

        // use a third-party library to fetch data
        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage) {
            that.setState({
                isLoading: false
            });
            alert(errorMessage);
        });
    },
    render: function() {
        var { isLoading, temp, location } = this.state;

        // create a way to conditionally render either the loading or the message component
        // function should return JSX code
        function renderMessage() {
            if (isLoading) {
                // takes precendence
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return (
                    <WeatherMessage location={location} temp={temp} />
                );
            } else {
                //
            }
        }

        return (
            <div style={{ margin: 'auto', width: '400px', padding: '10px' }}>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {(function() { return 'hello'; })()}
            </div>
        );
    }
});

module.exports = Weather;
