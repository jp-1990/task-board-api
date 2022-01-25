export const deleteOneListQuery = ({ id }) => `
DELETE FROM lists WHERE id = '${id}'
`;
