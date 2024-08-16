import { useState } from "react";
import styled from "styled-components";
import { tasks } from "../../../../fakeData/fakeTask"; 
import TaskDetails from "./TaskDetails";

export default function TaskCard() {
  const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);
  const toggleExpand = (taskId: number) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };

  return (
    <div>
      {tasks.map((task) => (
        <CardStyled key={task.id}>
          <div className="task-header" onClick={() => toggleExpand(task.id)}>
            <h3>{task.title}</h3>
            <p>Date limite : {task.dueDate}</p>
            <div className="tags">
              <span>{task.tags}</span>
            </div>
          </div>

          {expandedTaskId === task.id && (
            <TaskDetails task={task} />
          )}
        </CardStyled>
      ))}
    </div>
  );
}

const CardStyled = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  width: 317px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  .task-header {
    h3 {
      margin: 0 0 10px 0;
    }
    p {
      margin: 5px 0;
    }
    .tags span {
      display: inline-block;
      background-color: #eee;
      border-radius: 3px;
      padding: 2px 5px;
      margin-right: 5px;
      font-size: 12px;
    }
  }

  .task-details {
    margin-top: 15px;
    background-color: #f9f9f9;
    padding: 10px;
    border-top: 1px solid #ddd;

    .actions {
      margin-top: 10px;

      button {
        margin-right: 10px;
        padding: 5px 10px;
        border: none;
        background-color: #3755167d;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: white;
          color: #3755167d;
          border: 1px solid #3755167d;
          transition: 0.3s;
        }
      }
    }
  }

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.774);
  }
`;
