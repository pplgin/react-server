import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../actions/homeAction';

let data = {};
class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('step1...')
    this.props.actions.getUName();
    this.props.actions.getAge();
    this.props.actions.getAPIC();
  }
  componentDidMount() {
    console.log('step2...')
  }
  render() {
    const { content } = this.props;
    console.log(content)
    return (
      <div>
        Page Home!
        { this.props.homeName }
        { this.props.age }
        --------
        <a onClick={()=>{
          this.props.actions.getAPIC();
        }}> 获取数据 </a>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  homeName: state.Home.name,
  age:state.Home.age,
  content: state.Home.content
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});



export default connect(mapStateToProps, mapDispatchToProps)(Home)