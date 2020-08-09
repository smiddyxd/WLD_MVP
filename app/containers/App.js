import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LabelManager from '../components/LabelManager'
import * as LabelActions from '../actions/labels';

@connect(
  state => ({
    labels: state.labels
  }),
  dispatch => ({
    actions: bindActionCreators(LabelActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  render() {
    const { labels, actions } = this.props;

    console.log(labels)

    return (
      <div>
        <LabelManager 
          labels={labels}
          addLabel={actions.addLabel}
        />
        {/* <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} /> */}
      </div>
    );
  }
}
