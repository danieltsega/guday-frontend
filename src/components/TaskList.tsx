import React from "react";
import { tasks } from "../lib/data";
import TaskCard from "./TaskCard";

const TaskList: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          coverImage={task.coverImage}
          uploadDate={task.uploadDate}
        />
      ))}
    </div>
  );
};

export default TaskList;
