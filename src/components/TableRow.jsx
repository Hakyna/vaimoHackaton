var React = require('react');

var TableRow = React.createClass({
     getInitialState: function() {
         return {items: []}
     },

    render: function() {
         var issues = this.props.issues.issues;
        var listItems = issues.map(function (item) {
            return (
                <tr>
                    <td>{item.status.name}</td>
                    <td>{item.fields.labels}</td>
                </tr>
            );
        });

        return (
            <div>
                {listItems}
            </div>
        );
    }
});

module.exports = TableRow;
