var React = require('react');

var ErrorModal = React.createClass({
    // error title will be optional, provide default one:
    getDefaultProps: function() {
        return {
            title: 'Error'
        };
    },

    // specify validation - type and required - for passed properties:
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },

    // lifecycle hooks:
    // The componentDidMount() hook runs after the component output has been rendered to the DOM.
    // @see https://reactjs.org/docs/state-and-lifecycle.html
    componentDidMount: function() {
        // create a new instance of a Modal:
        // pass either a DOM id (using jquery selector here) or a ref as a parameter
        var modal = new Foundation.Reveal($('#error-modal'));
        // show the modal:
        modal.open();
    },

    render: function() {
        var { title, message } = this.props;
        return (
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
    }
});

// we need to define it as an alias in webpack.config.js in order to be able to use it easily from everywhere

module.exports = ErrorModal;
