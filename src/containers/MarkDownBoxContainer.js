import { connect } from 'react-redux';
import { updateText } from '../Actions';
import MarkDownBox from '../components/MarkDownBox';

const mapStateToProps = (state) => {
  return { text: state.text };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (text) => {
      console.log(text);
      dispatch(updateText(text))
    }
  }
}

const MarkDownBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkDownBox)

export default MarkDownBoxContainer
