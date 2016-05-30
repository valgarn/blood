import React from 'react';
import DocumentTitle from 'react-document-title';

export default class VerifyEmailPage extends React.Component {
  render() {
    var spToken = this.props.location.query.sptoken;
    return (
      <DocumentTitle title={`Verify Email`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Verify Your Account</h3>
              <hr />
            </div>
          </div>
          <VerifyEmailView spToken={spToken} />
        </div>
      </DocumentTitle>
    );
  }
}
