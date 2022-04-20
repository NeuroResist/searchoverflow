import { useParams, useNavigate } from "react-router-dom";
import { useSearchRequestForAnswers } from "../../Hooks/useSearchRequestForAnswers";
import "./Answers.css";

export const Answers = () => {
  const { id } = useParams();
  const [data, isLoading] = useSearchRequestForAnswers({ id });
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  if (isLoading) return <div> Loading</div>;
  return (
    <div>
      <button className="back" onClick={handleClick}>
        ← Go Back
      </button>
      <h1 className="answers__header">Answers to the question</h1>
      {data.map((item, i) => {
        const App = () => {
          return item.body;
        };
        return (
          <div key={i} className="container answers">
            <div className="answers__answer">
              <div className="answers__author">
                <h3>
                  Answer author:
                  <a
                    href={
                      "https://stackoverflow.com/users/" + item.owner.user_id
                    }
                  >
                    {" " + item.owner.display_name}
                  </a>
                </h3>
              </div>
              <div className="answers__score">
                <h4>Score: {item.score}</h4>
              </div>
              <div className="answers__body">
                <h4 className="answers__header-body">
                  <a
                    href={
                      "https://stackoverflow.com/questions/" + item.answer_id
                    }
                  >
                    Answer:
                  </a>
                </h4>
                <p dangerouslySetInnerHTML={{ __html: App() }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
