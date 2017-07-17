import { connect } from 'react-redux';
import { uploadImage } from '../redux/actionCreators';
import Form from '../components/Form.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (userInput) => {
            dispatch(uploadImage(userInput));
        }
    };
};

const UploadImageForm = connect(null, mapDispatchToProps)(Form);

export default UploadImageForm;