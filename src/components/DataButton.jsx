let React = require('react');
let RequestData = require('RequestData');
let DataTable = require('DataTable');

let DataButton = React.createClass({
   getInitialState: function () {
       return {
           ticketData: false
       }
   },

    onButtonClick: function(e) {
    e.preventDefault();
    let that = this;
    let data = {
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
      issues: response.issues,
      ticketData: true
    });
    }, function (error) {
        alert(error);
    })
    },
    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Generate data</button>
                {this.state.ticketData && <DataTable issues={this.state.issues}/>}
            </div>
        );
    }
});

module.exports = DataButton;