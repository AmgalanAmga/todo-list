import { MouseEvent } from "react";

const filters: TaskFilter[] = ["All", "Active", "Completed"];

type TaskFiltersProps = {
  filter: TaskFilter;
  count: number;
  onSelect: (filter: TaskFilter) => void;
};

export const TaskFilters = ({ filter, count, onSelect }: TaskFiltersProps) => {
  const handleSelect = (event: MouseEvent<HTMLButtonElement>) => onSelect(event.currentTarget.id as TaskFilter);

  return (
    <div className="flex items-center justify-between gap-2 border-b border-[#e9eeeb] px-6 sm:px-8">
      <div className="flex gap-5 sm:gap-7">
        {filters.map((item: TaskFilter) => (
          <button
            id={item}
            key={item}
            onClick={handleSelect}
            className={`cursor-pointer relative h-12 text-xs font-semibold transition sm:text-sm ${filter === item ? "text-[#236b53] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-[#236b53]" : "text-[#7b8680] hover:text-[#236b53]"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <span className="rounded-md bg-[#f0f4f1] px-2 py-1 text-[11px] font-medium tabular-nums text-[#65766c]">{count}</span>
    </div>
  );
};
