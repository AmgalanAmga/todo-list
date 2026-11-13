import TaskItem from "@/components/TaskItem";
import { TaskEmptyState } from "@/components/TaskEmptyState";

type TaskListProps = {
  tasks: Task[];
  hasTasks: boolean;
  onToggle: (task: Task) => void;
  onDelete: (task: Task) => void;
};

export const TaskList = ({ tasks, hasTasks, onToggle, onDelete }: TaskListProps) => {
  if (!tasks.length) return <TaskEmptyState hasTasks={hasTasks} />;

  return (
    <ul className="divide-y divide-[#edf1ee] px-3 py-2 sm:px-5">
      {tasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};
