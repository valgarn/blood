import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Welcome!</h2>
        <hr />
        <div className="jumbotron">
          <p>
            <strong>This is the example fullstack project for React, ReactRouter, Flux, Express</strong>
          </p>
          <ol className="lead">
            <li><Link to="/register">Registration</Link></li>
            <li><Link to="/forgot">Forgot Password</Link></li>
            <li><Link to="/profile">Custom Profile Data</Link></li>
          </ol>
        </div>
      </div>
    );
  }
}
