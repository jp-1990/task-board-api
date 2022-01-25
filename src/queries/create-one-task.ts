export const createOneTaskQuery = ({ name, description, deadline }) => `
INSERT INTO tasks (name,description,deadline) VALUES ('${name}','${description}','${deadline}') RETURNING id, name, description, deadline, completed, overdue, type
`;
