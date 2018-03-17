var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    // error title will be optional, provide default one:
    getDefaultProps: function() {
        return {
            title: 'Error'
        };
    },

    // specify validation - type and required - for passed properties:
    // @see https://reactjs.org/docs/typechecking-with-proptypes.html
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },

    // lifecycle hooks:
    // The componentDidMount() hook runs after the component output has been rendered to the DOM.
    // @see https://reactjs.org/docs/state-and-lifecycle.html
    componentDidMount: function() {

        var { title, message } = this.props;
        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        OK
                    </button>
                </p>
            </div>
        );

        // now we have to add this markup into the dom

        // create variable with $ - because it is going to be a jquery selector
        // first render JSX code to sting, then pass it to create the contents
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));

        // add  to the component
        // find the component DOM node, then use jQuery html method to pass the markup to show to the screen
        $(ReactDOM.findDOMNode(this)).html($modal);

        // create a new instance of a Modal:
        // pass either a DOM id (using jquery selector here) or a ref as a parameter
        var modal = new Foundation.Reveal($('#error-modal'));
        // show the modal:
        modal.open();
    },

    render: function() {

        // return an empty div - component renders nothing because Foundation is going to manipulate the DOM so we start with no DOM at all
        return (
            <div>
            </div>
        );
    }
});

// we need to define it as an alias in webpack.config.js in order to be able to use it easily from everywhere

module.exports = ErrorModal;
