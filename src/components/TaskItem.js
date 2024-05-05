
import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default TaskItem;
