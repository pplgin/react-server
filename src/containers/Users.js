import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../actions/homeAction';


class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        User!
      </div>
    );
  }
}


const mapStateToProps = state => ({
  homeName: state.Home.name
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(User)