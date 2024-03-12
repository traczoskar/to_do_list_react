export const getExampleTasks = async () => {
  const response = await fetch("/to_do_list_react/exampleTasks.json");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as string[];
};
