export const createOneTaskQuery = ({
  name,
  description,
  deadline,
  list_id,
}) => `
INSERT INTO tasks (name,description,deadline,list_id) VALUES ('${name}','${description}','${deadline}','${list_id}') RETURNING task_id, list_id, name, description, deadline, completed, overdue, type
`;
