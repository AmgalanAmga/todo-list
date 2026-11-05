import type { Task } from "@/lib/tasks";
import TaskItem from "@/components/task-item";
import TaskEmptyState from "@/components/task-empty-state";

type TaskListProps = {
  tasks: Task[];
  hasTasks: boolean;
  onToggle: (task: Task) => void;
  onDelete: (task: Task) => void;
};

const TaskList = ({ tasks, hasTasks, onToggle, onDelete }: TaskListProps) => {
  const renderTask = (task: Task) => <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />;

  if (!tasks.length) return <TaskEmptyState hasTasks={hasTasks} />;

  return <ul className="divide-y divide-[#edf1ee] px-3 py-2 sm:px-5">{tasks.map(renderTask)}</ul>;
};

export default TaskList;
