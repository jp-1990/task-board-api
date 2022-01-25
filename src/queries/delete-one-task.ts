export const deleteOneTaskQuery = ({ id }) => `
DELETE FROM tasks WHERE id = '${id}'
`;
