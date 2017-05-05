var React = require('react');
var TableRow = require('TableRow');


var DataTable = React.createClass({
    render: function(){
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
                        <TableRow />
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = DataTable;