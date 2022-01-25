export const completeOneTaskQuery = ({ id }) => `
UPDATE tasks SET completed= true WHERE id= '${id}' RETURNING id, name, description, deadline, completed, overdue, type
`;
