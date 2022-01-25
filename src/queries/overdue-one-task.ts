export const overdueOneTaskQuery = ({ id }) => `
UPDATE tasks SET overdue= true WHERE id= '${id}' RETURNING id, name, description, deadline, completed, overdue, type
`;
