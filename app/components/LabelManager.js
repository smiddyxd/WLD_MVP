import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

export default ({ addTodo }) => {
  return (
    <div>
      labelManager
    </div>
  );
}

// export default class Header extends Component {

//   handleSave = (text) => {
//     if (text.length !== 0) {
//       this.props.addTodo(text);
//     }
//   };

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
//     );
//   }
// }
