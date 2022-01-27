export const createOneTaskQuery = ({
  name,
  description,
  deadline,
  index,
  list_id,
}) => `
INSERT INTO tasks (name,description,deadline,list_id,index) VALUES ('${name}','${description}','${deadline}','${list_id}','${index}') RETURNING task_id, list_id, index, name, description, deadline, completed, overdue, type
`;
