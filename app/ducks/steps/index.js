const initialState = { step: 0 };

const types = {
  STEPS_NEXT: 'STEPS/STEPS_NEXT',
  STEPS_BACK: 'STEPS/STEPS_BACK'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case types.STEPS_NEXT:
    return { ...state, step: state.step + 1 };
  case types.STEPS_BACK:
    return { ...state, step: state.step - 1 };
  default:
    return state;
  }
};

const actions = {
  nextStep: () => nextStep(),
  previousStep: () => previousStep()
};

const nextStep = () => {
  return dispatch => {
    dispatch({ type: types.STEPS_NEXT });
  };
};

const previousStep = () => {
  return dispatch => {
    dispatch({ type: types.STEPS_BACK });
  };
};

export { initialState, actions, reducer };
