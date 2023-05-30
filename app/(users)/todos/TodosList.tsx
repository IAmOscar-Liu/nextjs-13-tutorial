import { Todo } from "@/typings";
import fetch from "isomorphic-fetch";
import React from "react";
import Link from "next/link";
import agent from "@/agent";

const fetchTodos = async () => {
  // timeout for random number of seconds between 1 and 5
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 5 + 1))
  );
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    // @ts-ignore
    agent,
  });
  const todos: Todo[] = await res.json();
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
