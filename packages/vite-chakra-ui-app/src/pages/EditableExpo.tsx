import {
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";

export default function EditableExpo() {
  return (
    <Editable defaultValue="Take some chakra">
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
}
