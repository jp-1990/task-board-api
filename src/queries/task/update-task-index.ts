export const updateTaskIndexQuery = ({ id, index, list_id }) => {
  return `
    UPDATE tasks SET index= '${index}', list_id= '${list_id}' WHERE task_id= '${id}' RETURNING task_id, list_id, index, name, description, deadline, completed, overdue, type
    `;
};
