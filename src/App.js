import React from "react";
import { Mutation } from "react-apollo";
import Dropzone from "react-dropzone";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const uploadFileMutation = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file)
  }
`;

export default () => (
  <Mutation mutation={uploadFileMutation}>
    {(mutate) => (
      <Dropzone
        onDrop={async ([file]) => {
          console.log(file);
          const a = await mutate({ variables: { file } });
          console.log(a);
        }}
      >
        <p>Try dropping some files here, or click to select files to upload.</p>
      </Dropzone>
    )}
  </Mutation>
);
