import * as survayConst from "./const.survay";
import { sendAnswer } from "./api.survay";

export const initState = () => ({
  type: survayConst.SURVAY_INIT
});

export const survayPending = () => ({
  type: survayConst.SURVAY_PENDING
});

export const survaySuccess = () => ({
  type: survayConst.SURVAY_SUCCESS
});

export const survayRejected = () => ({
  type: survayConst.SURVAY_REJECTED
});

export const sendSurvay = body => dispatch => {
  dispatch(survayPending());
  console.log("pending");
  sendAnswer(body)
    .then(() => {
      dispatch(survaySuccess());
      console.log("bravo");
    })
    .catch(err => {
      dispatch(survayRejected(err));
      setTimeout(console.log("demande rejetée"), 5000);
    });
};
