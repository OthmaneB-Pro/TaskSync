export type TaskType = {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    tags: string[];
    status: string;
  };
  
  export type TaskCardType = {
    task: TaskType;
    onExpand: (id: number) => void;
    isExpanded: boolean;
  };
  