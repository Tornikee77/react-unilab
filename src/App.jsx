import { url } from "./API/api";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["urlFetch"],
    queryFn: url,
  });
  if (isLoading) return <p>loading...</p>;
  if (error) return <p>Error!</p>;
  return <div>{data.map((eachElement) => eachElement.name)}</div>;
};

export default App;
