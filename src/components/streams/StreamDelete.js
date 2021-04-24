import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { deleteStream, fetchStream } from '../../actions';

const StreamDelete = (props) => {
  const streamId = Number(props.match.params.id);
  const fetchStream = props.fetchStream;

  useEffect(() => {
    fetchStream(streamId);
  }, [streamId, fetchStream]);

  const onDelete = () => {
    props.deleteStream(streamId);
  };

  const renderActions = () => {
    return (
      <>
        <button onClick={onDelete} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  };

  const onDismiss = () => {
    history.push('/');
  };

  const renderContent = () => {
    if (!props.stream) {
      return 'Are you sure you want to delete the stream';
    }

    return `Are you sure you want to delete the stream "${props.stream.title}"`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={onDismiss}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
