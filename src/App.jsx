import { url } from "./API/api";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["urlFetch"],
    queryFn: url,
  });
  if (isLoading) return <p>loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <div>
      {data
        .filter((filterData) => filterData.id <= 1)
        .map((eachElement) => (
          <div key={eachElement.id}>
            <p>{eachElement.name}</p>
            <p>{eachElement.username}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
