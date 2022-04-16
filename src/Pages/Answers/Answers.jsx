import { useParams } from "react-router-dom";

export const Answers = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};
