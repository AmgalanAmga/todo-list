import { CornerDownLeft, Plus } from "lucide-react";
import { useState, type ChangeEvent, type SubmitEvent } from "react";

type TaskFormProps = { onCreate: (title: string) => void };

const TaskForm = ({ onCreate }: TaskFormProps) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const createTask = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) return;
    onCreate(title.trim());
    setTitle("");
  };

  return (
    <>
      <form onSubmit={createTask} className="mx-6 rounded-2xl border border-[#dce9e2] bg-[#f4f8f5] p-2 sm:mx-8">
        <label htmlFor="new-task" className="sr-only">
          Task name
        </label>
        <div className="flex items-center gap-2">
          <input
            id="new-task"
            required
            maxLength={160}
            value={title}
            onChange={handleTitleChange}
            placeholder="What needs to get done?"
            className="min-w-0 flex-1 rounded-xl bg-transparent px-3 py-3.5 text-sm text-[#213d35] placeholder:text-[#75867e] focus:bg-white focus:outline-none focus:shadow-none focus-visible:outline-none focus-visible:shadow-none sm:px-4 sm:text-base"
          />
          <button
            type="submit"
            disabled={!title.trim()}
            className="cursor-pointer disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[#23735a] focus-visible:outline-offset-[3px] flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-[#236b53] px-4 text-sm font-semibold text-white transition motion-reduce:transition-none hover:bg-[#18523e] active:scale-95 disabled:bg-[#d8e5dd] disabled:text-[#63796c] sm:px-5"
          >
            <Plus className="h-4 w-4" />
            Add<span className="hidden sm:inline">task</span>
          </button>
        </div>
      </form>
      <p className="mx-7 mb-7 mt-3 flex items-center justify-end gap-1.5 text-[11px] text-[#7a8881] sm:mx-9">
        <CornerDownLeft className="h-3 w-3" /> Enter to add a task
      </p>
    </>
  );
};

export default TaskForm;
