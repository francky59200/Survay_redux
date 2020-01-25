import React from "react";
import { sendSurvay, initState } from "../actions/actions.survay";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import { FaAngellist } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import "./style.css";

class Survay extends React.Component {
  state = {
    input: "",
    answer: "",
    note: this.props.note
  };

  componentDidMount() {
    this.props.initState();
  }

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  handleNote = note => {
    this.setState({ note });
  };

  handleAnswer = e => {
    this.setState({ answer: e.target.value });
  };

  handleClick = body => {
    if (this.state.input.length > 2 || this.state.answer.length > 2) {
      body = {
        note: this.state.note * 2,
        name: this.state.input,
        answer: this.state.answer
      };

      this.props.sendSurvay(body);
    } else {
      this.props.sendSurvay({
        note: this.state.note * 2,
        name: null,
        answer: null
      });
    }
  };

  render() {
    return (
      <div className="survay__display">
        {!this.props.survayDisplay ? (
          <div className="survay__form">
            <div className="survay___star">
              <p>Please give us your opinion</p>

              <StarRatings
                rating={this.state.note}
                starRatedColor="blue"
                changeRating={this.handleNote}
                numberOfStars={5}
                name="note"
                starDimension="30px"
                starSpacing="5px"
              />
            </div>
            <p>
              <label>Your Lastname</label>
            </p>

            <p>
              <input
                style={{ width: "180px" }}
                value={this.state.input}
                onChange={this.handleInput}
                required
              />
            </p>

            <div>
              {this.state.note < 5 && (
                <div>
                  <p>Tell us why you apply this note</p>

                  <textarea
                    style={{ width: "180px", height: "70px" }}
                    value={this.state.answer}
                    onChange={this.handleAnswer}
                    required
                  />
                </div>
              )}
            </div>
            <p>
              {this.props.errorMessage && (
                <span>{this.props.errorMessage}</span>
              )}
            </p>
            <button className="survay__button" onClick={this.handleClick}>
              Validate
            </button>
            {this.props.loading && (
              <div>
                <ClipLoader
                  size={150}
                 
                  color={"#123abc"}
                  loading={this.props.loading}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="survay__form">
            <p>Thank you for giving your advise </p>
            <FaAngellist className="survay__icon" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  note: state.survayReducers.note,
  survayDisplay: state.survayReducers.survayDisplay,
  errorMessage: state.survayReducers.errorMessage,
  loading: state.survayReducers.loading
});

const mapDispatchToProps = dispatch => ({
  initState: () => dispatch(initState()),
  sendSurvay: body => dispatch(sendSurvay(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Survay);
