import { useSearchRequest } from "../../Hooks/useSearchRequest";
import { UITable } from "../../UI/UITable/UITable";

export const Table = ({ searchTitle }) => {
  const [data, isLoading] = useSearchRequest(searchTitle);
  console.log(searchTitle, isLoading);

  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      {data?.items?.length ? (
        data.items?.map((item, index) => {
          return (
            <UITable
              display_name={item.owner.display_name}
              answer_count={item.answer_count}
              tags={item.tags}
              title={item.title}
            />
          );

          //     <span style={{ color: "red" }}>
          //       {index + 1 + "_" + item.title}
          //     </span>
          //     <span style={{ color: "blue" }}>{item.owner.display_name}</span>
          //     <span style={{ color: "green" }}>{item.answer_count}</span>
          //     <span style={{ color: "darkorange" }}>
          //       {item.tags.map((tag) => (
          //         <span>{tag}__</span>
          //       ))}
          //     </span>
          //     <br />
          // )
        })
      ) : (
        <div>Nothing</div>
      )}
    </div>
  );
};
