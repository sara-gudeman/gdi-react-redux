import { connect } from 'react-redux';
import FeedList from '../components/FeedList.jsx';

const mapStateToProps = (state) => {
    return {
        photos: state.photos
    };
};

const FeedListContainer = connect(mapStateToProps)(FeedList);

export default FeedListContainer;