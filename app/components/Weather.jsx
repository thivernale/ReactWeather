var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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

        // before sending request clean up all our data:
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        // use a third-party library to fetch data
        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message // parameter "e" is a javascript Error object
            });
            //alert(errorMessage);
        });
    },

    // method is run when component is first loaded
    componentDidMount: function() {
        // pull data from the React router
        var location = this.props.location.query.location;

        // if there is a location specified in query string, run the search with it
        if (location && location.length > 0) {
            this.handleSearch(location);
            // remove location from query string
            window.location = '#/';
        }
    },

    // gets called every time the component's props get updated
    componentWillReceiveProps: function(newProps) {
        // get data from new props
        var location = newProps.location.query.location;

        // if there is a location specified in query string, run the search with it
        if (location && location.length > 0) {
            this.handleSearch(location);
            // remove location from query string
            window.location = '#/';
        }
    },

    render: function() {
        var { isLoading, temp, location, errorMessage } = this.state;

        // create a way to conditionally render either the loading or the message component
        // function should return JSX code
        function renderMessage() {
            if (isLoading) {
                // takes precendence
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return (
                    <WeatherMessage location={location} temp={temp} />
                );
            } else {
                //
            }
        }

        // we will do conditional rendering for the error modal as well:
        function renderError() {
            if (typeof errorMessage === 'string') {
                return <ErrorModal message={errorMessage} />;
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
                {(function() { /*return 'hello';*/ })()}
            </div>
        );
    }
});

module.exports = Weather;
