import * as survayConst from "../actions/const.survay";

const initState = {
  survayDisplay: false,
  errorMessage: "",
  note: 5,
  loading: false
};

const survayReducers = (state = initState, action) => {
  switch (action.type) {
    case survayConst.SURVAY_INIT:
      console.log("ceci est l'init", action);
      return initState;
    case survayConst.SURVAY_PENDING:
      console.log("ceci est le pending", action);
      return {
        ...state,
        loading: true
      };
    case survayConst.SURVAY_SUCCESS:
      console.log("ceci est le success", action);
      return { ...state, survayDisplay: true };
    case survayConst.SURVAY_REJECTED:
      return { ...state, errorMessage: "erreur serveur" };
    default:
      return state;
  }
};

export default survayReducers;
