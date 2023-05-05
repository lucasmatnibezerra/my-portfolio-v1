import { Tag, TagLabel } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
function TagSkill(props) {
  return (
    <Tag size="sm" variant="outline" colorScheme="blue">
      <TagLabel>{props.skill}</TagLabel>
    </Tag>
  );
}

export default TagSkill;
