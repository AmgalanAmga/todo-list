import { Check, Trash2 } from "lucide-react";

type TaskItemProps = {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (task: Task) => void;
};

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  const handleToggle = () => onToggle(task);
  const handleDelete = () => onDelete(task);

  return (
    <li className={`group flex items-center gap-2 rounded-xl px-1 py-2 transition sm:gap-3 sm:px-2 ${task.completed ? "bg-[#f8faf8]" : "hover:bg-[#f6f9f6]"}`}>
      <button onClick={handleToggle} className="cursor-pointer flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
        <span
          className={`flex h-[22px] w-[22px] items-center justify-center rounded-full border transition ${task.completed ? "border-[#3a8366] bg-[#3a8366] text-white" : "border-[#bdcdc2] bg-white group-hover:border-[#63947b]"}`}
        >
          {task.completed && <Check className="h-3.5 w-3.5" strokeWidth={2.5} />}
        </span>
      </button>
      <p
        className={`min-w-0 flex-1 break-words py-3 text-sm leading-6 ${task.completed ? "text-[#93a096] line-through decoration-[#bac6bd]" : "font-medium text-[#30483c]"}`}
      >
        {task.title}
      </p>
      <button
        onClick={handleDelete}
        className="cursor-pointer flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#93a198] transition hover:bg-[#fbece7] hover:text-[#bb6250]"
      >
        <Trash2 className="h-4 w-4" strokeWidth={1.7} />
      </button>
    </li>
  );
};

export default TaskItem;
