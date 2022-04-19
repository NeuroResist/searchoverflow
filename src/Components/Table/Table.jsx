import { useSearchRequest } from "../../Hooks/useSearchRequest";
import { TableHeader } from "../TableHeader/TableHeader";
import { TableQuestion } from "../TableQuestion/TableQuestion";
import "./Table.css";
import loader from "./LoadingTable.png";

export const Table = ({ searchTitle, filter, tag, author }) => {
  const [data, isLoading] = useSearchRequest({
    searchTitle,
    filter,
    tag,
    author,
  });
  if (isLoading)
    return (
      <div>
        <img src={loader} alt="Loading" />
      </div>
    );
  return (
    <div>
      <TableHeader key="TableHeader" />
      {data?.items?.length ? (
        data.items?.map((item, index) => {
          return (
            <TableQuestion
              key={item.question_id + "_" + index}
              display_name={item.owner.display_name}
              answer_count={item.answer_count}
              tags={item.tags}
              title={item.title}
              id={item.owner.user_id}
              questionId={item.question_id}
            />
          );
        })
      ) : (
        <div>Ничего не найдено :(</div>
      )}
    </div>
  );
};
