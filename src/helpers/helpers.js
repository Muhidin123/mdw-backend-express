export const makeObj = rows => {
  const obj = {
    id: rows.id,
    page_id: rows.page_id,
    title: rows.title,
    content: rows.content,
    created_at: rows.created_at,
    updated_at: rows.updated_at,
    page: {
      id: rows.page_id,
      label: rows.label,
      name: rows.name,
      created_at: rows.createdat,
      updated_at: rows.updatedat,
    },
  };
  return obj;
};
