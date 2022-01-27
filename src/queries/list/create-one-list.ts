export const createOneListQuery = ({ name }) => `
INSERT INTO lists (name) VALUES ('${name}') RETURNING list_id, name, type
`;
