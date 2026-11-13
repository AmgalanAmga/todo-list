"use client";

import { useState } from "react";
import { TaskHeader, TaskFilters, TaskForm, TaskList } from "@/components";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskFilter>("All");

  const createTask = (title: string) => {
    const task: Task = { id: crypto.randomUUID(), title, completed: false };

    setTasks((current: Task[]) => [task, ...current]);
    setFilter("All");
  };

  const toggleTask = (task: Task) => {
    const toggleMatchingTask = (item: Task) => (item.id === task.id ? { ...item, completed: !item.completed } : item);

    setTasks((current: Task[]) => current.map(toggleMatchingTask));
  };

  const deleteTask = (task: Task) => {
    const removeTask = (current: Task[]) => current.filter((item: Task) => item.id !== task.id);
    setTasks(removeTask);
  };

  const matchesFilter = (task: Task) => filter === "All" || (filter === "Active" ? !task.completed : task.completed);
  const visibleTasks = tasks.filter(matchesFilter);

  return (
    <main className="min-h-screen px-4 py-8 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/80 bg-white shadow-[0_24px_80px_-24px_#174b4530]">
        <TaskHeader />
        <TaskForm onCreate={createTask} />
        <section>
          <TaskFilters filter={filter} count={visibleTasks.length} onSelect={setFilter} />
          <TaskList tasks={visibleTasks} hasTasks={tasks.length > 0} onToggle={toggleTask} onDelete={deleteTask} />
        </section>
      </div>
    </main>
  );
};

export default Home;
