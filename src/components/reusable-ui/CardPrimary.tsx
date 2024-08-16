import styled from "styled-components";
import TaskDetails from "../pages/interfaceMain/status/TaskDetails";

export type TaskType = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  status: string;
};

type TaskCardType = {
  task: TaskType;
  onExpand: (id: number) => void;
  isExpanded: boolean;
};

export default function CardPrimary({
  task,
  onExpand,
  isExpanded,
}: TaskCardType) {
  return (
    <CardStyled>
      <div className="task-header" onClick={() => onExpand(task.id)}>
        <h3>{task.title}</h3>
        <p>Date limite : {task.dueDate}</p>
        <div className="tags">
          {task.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>

      {isExpanded && <TaskDetails task={task} />}
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  width: 315px;
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
    }
  }
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.774);
  }
`;