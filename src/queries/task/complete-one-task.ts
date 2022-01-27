export const completeOneTaskQuery = ({ id, boolean }) => `
UPDATE tasks SET completed= ${boolean} WHERE task_id= '${id}' RETURNING task_id, list_id, name, description, deadline, completed, overdue, type
`;
