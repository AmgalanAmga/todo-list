import type { TaskFilter } from "@/lib/tasks";
import TaskFilterButton from "@/components/task-filter-button";

const filters: TaskFilter[] = ["All", "Active", "Completed"];

type TaskFiltersProps = {
  filter: TaskFilter;
  count: number;
  onSelect: (filter: TaskFilter) => void;
};

const TaskFilters = ({ filter, count, onSelect }: TaskFiltersProps) => {
  const renderFilter = (item: TaskFilter) => <TaskFilterButton key={item} item={item} filter={filter} onSelect={onSelect} />;

  return (
    <div className="flex items-center justify-between gap-2 border-b border-[#e9eeeb] px-6 sm:px-8">
      <div className="flex gap-5 sm:gap-7">{filters.map(renderFilter)}</div>
      <span className="rounded-md bg-[#f0f4f1] px-2 py-1 text-[11px] font-medium tabular-nums text-[#65766c]">{count}</span>
    </div>
  );
};

export default TaskFilters;
