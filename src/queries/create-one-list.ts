export const createOneListQuery = ({ name }) => `
INSERT INTO lists (name) VALUES ('${name}') RETURNING id, name, tasks, type
`;
