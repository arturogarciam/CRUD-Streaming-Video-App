import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

const StreamEdit = (props) => {
  const streamId = Number(props.match.params.id);
  const fetchStream = props.fetchStream;

  useEffect(() => {
    fetchStream(streamId);
  }, [streamId, fetchStream]);

  const onSubmit = (formValues) => {
    props.editStream(props.match.params.id, formValues);
  };

  if (!props.stream) return <div>Loading...</div>;

  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={{
          title: props.stream.title,
          description: props.stream.description,
        }}
        id={props.stream.id}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
