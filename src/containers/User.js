import React, { Component } from 'react';

export default class User extends Component {

  render() {
    const { params } = this.props.match;

    return (
      <div>
        UserId: {params.id}
      </div>
    );
  }
}
