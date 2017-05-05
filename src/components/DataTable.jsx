var React = require('react');
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
                <button onClick={this.onButtonClick}>Generate data</button>
                <table>
                </table>
            </div>);
    }
});

module.exports = DataTable;