var React = require('react');
var TableRow = require('TableRow');

var RequestData = require('RequestData');

var DataTable = React.createClass({
      onButtonClick: function() {
        var that = this;
        var data = {
            "totalIssues": 3,
            "issues": [
                {
                    "fields": {
                        "labels": [
                            "Ubuntu/PHP7",
                            "need info"
                        ]
                    },
                    "status": {
                        "name": "In Progress"
                    }
                },
                {
                    "fields": {
                        "labels": [
                            "Ubuntu/PHP7",
                            "need info"
                        ]
                    },
                    "status": {
                        "name": "In Progress"
                    }
                },
                {
                    "fields": {
                        "labels": [
                            "Ubuntu/PHP7",
                            "need info"
                        ]
                    },
                    "status": {
                        "name": "In Progress"
                    }
                }
            ]
        };

        console.log(data);

        RequestData.getData(data).then(function (response) {
            that.setState({
              ticketsNum: response.totalIssues,
              issues: response.issues
          })
        }, function (error) {
            alert(error);
        })
    },
    render: function(){
        return(
            <div>
                <span>Table starts</span>
                <table>
                    <button onClick={this.onButtonClick}>Generate data</button>
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