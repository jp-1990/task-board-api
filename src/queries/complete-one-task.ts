export const completeOneTaskQuery = ({ id }) => `
UPDATE tasks SET completed= true WHERE task_id= '${id}' RETURNING task_id, list_id, name, description, deadline, completed, overdue, type
`;
