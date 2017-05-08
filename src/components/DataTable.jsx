var React = require('react');
var TableRow = require('TableRow');

var DataTable = React.createClass({
    render: function(){
        var issues = this.props;
        return(
            <div>
                <span>Table starts</span>
                <table>
                    <thead>
                    <tr>
                        <th>th1</th>
                        <th>th2</th>
                    </tr>
                    </thead>
                    <tbody>
                        <TableRow issues={issues}/>
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = DataTable;