import { ListTodo } from "lucide-react";

export const TaskHeader = () => (
  <header className="flex items-center gap-3 px-6 pb-6 pt-7 sm:px-8 sm:pt-8">
    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e5f2ed] text-[#23735a]">
      <ListTodo className="h-6 w-6" strokeWidth={1.8} />
    </span>
    <h1 className="text-2xl font-semibold tracking-tight text-[#213d35]">
      My tasks<span className="text-[#3e9476]">.</span>
    </h1>
  </header>
);
