export const updateOneTaskQuery = ({
  id,
  name,
  description,
  deadline,
  list_id,
}) => {
  const itemNames = ["name", "description", "deadline", "list_id"];
  const queryString = [name, description, deadline, list_id]
    .reduce((arr, item, index) => {
      if (arr.length && item) arr.push(`, `);
      if (item) arr.push(`${itemNames[index]}= '${item}'`);
      return arr;
    }, [] as string[])
    .join(``);

  return `
    UPDATE tasks SET ${queryString} WHERE task_id= '${id}' RETURNING task_id, list_id, name, description, deadline, completed, overdue, type
    `;
};
