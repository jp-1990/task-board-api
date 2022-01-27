export const deleteOneTaskQuery = ({ id }) => `
DELETE FROM tasks WHERE task_id = '${id}'
`;
