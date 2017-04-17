const initialState = {
  playbooks: []
};

const types = {
  PLAYBOOKS_ADD: 'PLAYBOOKS/PLAYBOOKS_ADD'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case types.PLAYBOOKS_ADD:
    return { ...state, playbooks: action.payload.playbooks };
  default:
    return state;
  }
};

const actions = {
  addPlaybooks: newPlaybooks => addPlaybooks(newPlaybooks)
};

const addPlaybooks = newPlaybooks => {
  return (dispatch, getState) => {
    const { playbooks } = getState().playbooks;
    newPlaybooks.forEach(playbook =>
      playbooks.push({
        path: playbook.path,
        name: playbook.name
      }));
    return dispatch({ type: types.PLAYBOOKS_ADD, payload: { playbooks } });
  };
};

export { initialState, actions, reducer };
