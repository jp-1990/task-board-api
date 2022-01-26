export const updateTaskIndexQuery = ({ id, index }) => {
  return `
    UPDATE tasks SET index= '${index}' WHERE task_id= '${id}' RETURNING task_id, list_id, index, name, description, deadline, completed, overdue, type
    `;
};
