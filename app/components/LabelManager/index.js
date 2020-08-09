import React, { PropTypes, Component } from 'react'
import LabelList from './LabelList'
import CurrentLabelEditor from './CurrentLabelEditor'
import { LabelsManagerWrapper } from './style'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LabelActions from '../../actions/labels'

@connect(
  state => ({
    labelsState: state.labels
  }),
  dispatch => ({
    actions: bindActionCreators(LabelActions, dispatch)
  })
)

export default class LabelManager extends Component {

  render() {
    const { labelsState, actions } = this.props

    console.log(labelsState)

    return (
      <div>
        <LabelManager
          labels={labels}
          addLabel={actions.addLabel}
        />
        {/* <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} /> */}
      </div>
    )
  }
}


export default ({ labels }) => {
  return (
    <LabelsManagerWrapper>
      <LabelList labels={labels}/>
      <CurrentLabelEditor />
    </LabelsManagerWrapper>
  )
}


// export default class Header extends Component {

//   handleSave = (text) => {
//     if (text.length !== 0) {
//       this.props.addTodo(text)
//     }
//   }

//   render() {
//     return (
//       <header>
//         <h1>todos</h1>
//         <TodoTextInput
//           newTodo
//           onSave={this.handleSave}
//           placeholder="What needs to be done?"
//         />
//       </header>
//     )
//   }
// }
