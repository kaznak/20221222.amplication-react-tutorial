import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Edit>
  );
};
