import { useSearchRequest } from "../../Hooks/useSearchRequest";
import { TableHeader } from "../TableHeader/TableHeader";
import { TableQuestion } from "../TableQuestion/TableQuestion";
import "./Table.css";
import loader from "./LoadingTable.png";

export const Table = ({ searchTitle }) => {
  const [data, isLoading] = useSearchRequest(searchTitle);
  console.log(searchTitle, isLoading);

  if (isLoading)
    return (
      <div>
        <img src={loader} alt="" />
      </div>
    );
  return (
    <div>
      <TableHeader />
      {data?.items?.length ? (
        data.items?.map((item, index) => {
          return (
            <>
              <TableQuestion
                display_name={item.owner.display_name}
                answer_count={item.answer_count}
                tags={item.tags}
                title={item.title}
              />
            </>
          );
        })
      ) : (
        <div>Ничего не найдено :(</div>
      )}
    </div>
  );
};
