import { useSearchRequest } from "../../Hooks/useSearchRequest";

export const Table = ({ searchTitle }) => {
  const [data, isLoading] = useSearchRequest(searchTitle);
  console.log(searchTitle, isLoading);

  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      {data?.items?.length ? (
        data.items?.map((item, index) => <p>{index + 1 + "_" + item.title}</p>)
      ) : (
        <div>Nothing</div>
      )}
    </div>
  );
};
