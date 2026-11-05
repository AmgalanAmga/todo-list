import type { TaskFilter } from "@/lib/tasks";

type TaskFilterButtonProps = {
  item: TaskFilter;
  filter: TaskFilter;
  onSelect: (filter: TaskFilter) => void;
};

const TaskFilterButton = ({ item, filter, onSelect }: TaskFilterButtonProps) => {
  const handleSelect = () => onSelect(item);

  return (
    <button
      onClick={handleSelect}
      className={`cursor-pointer disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[#23735a] focus-visible:outline-offset-[3px] relative min-h-12 text-xs font-semibold transition motion-reduce:transition-none sm:text-sm ${filter === item ? "text-[#236b53] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-[#236b53]" : "text-[#7b8680] hover:text-[#236b53]"}`}
    >
      {item}
    </button>
  );
};

export default TaskFilterButton;
