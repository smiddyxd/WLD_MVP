const initialState = [{
  labels: [
    {
      name: 'food'
    }
  ]
}];

const actionsMap = {
  ['addLabel'](state, action) {
    return [{
      name: action.name
    }, ...state];
  }
};

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}

// ,
// [ActionTypes.DELETE_TODO](state, action) {
//   return state.filter(todo =>
//     todo.id !== action.id
//   );
// },
// [ActionTypes.EDIT_TODO](state, action) {
//   return state.map(todo =>
//     (todo.id === action.id ?
//       Object.assign({}, todo, { text: action.text }) :
//       todo)
//   );
// },
// [ActionTypes.COMPLETE_TODO](state, action) {
//   return state.map(todo =>
//     (todo.id === action.id ?
//       Object.assign({}, todo, { completed: !todo.completed }) :
//       todo)
//   );
// },
// [ActionTypes.COMPLETE_ALL](state/*, action*/) {
//   const areAllCompleted = state.every(todo => todo.completed);
//   return state.map(todo => Object.assign({}, todo, {
//     completed: !areAllCompleted
//   }));
// },
// [ActionTypes.CLEAR_COMPLETED](state/*, action*/) {
//   return state.filter(todo => todo.completed === false);
// }
