const initialState = {
  availableRoles: [
    { key: 'developer', label: 'Developer' },
    { key: 'designer', label: 'Designer' },
  ],
  selectedRole: null,
};

const types = {
  ROLES_SELECT: 'ROLES/ROLES_SELECT',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case types.ROLES_SELECT:
    return { ...state, selectedRole: action.payload.selectedRole };
  default:
    return state;
  }
};

const actions = {
  selectRole: options => selectRole(options),
};

const selectRole = roleKey => {
  return (dispatch, getState) => {
    const { availableRoles } = getState().roles;
    const selectedRole = availableRoles.find(role => role.key == roleKey);
    return dispatch({ type: types.ROLES_SELECT, payload: { selectedRole } });
  };
};

export { initialState, actions, reducer };
