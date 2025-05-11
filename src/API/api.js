export const url = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("არ მოიძებნა");
  return response.json();
};
