import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Answers = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return <button onClick={handleClick}>{id}</button>;
};
