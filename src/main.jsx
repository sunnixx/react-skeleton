var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title='Ingredients' headingColor= "#3498db" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title='Groceries' headingColor="#34495e" />, document.getElementById('groceries'));
ReactDOM.render(<ListManager title='ToDo' headingColor="#e67e22" />, document.getElementById('todo'));
