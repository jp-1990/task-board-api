export const deleteOneListQuery = ({ id }) => `
DELETE FROM lists WHERE list_id = '${id}'
`;
