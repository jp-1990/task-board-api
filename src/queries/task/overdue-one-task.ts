export const overdueOneTaskQuery = ({ id }) => `
UPDATE tasks SET overdue= true WHERE task_id= '${id}' RETURNING task_id, list_id, name, description, deadline, completed, overdue, type
`;
