import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTodo = async (req, res) => {
  try {
    const todo = await prisma.todo.create({
      data: { title: req.body.title }
    });

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todo = await prisma.todo.update({
      where: { id: Number(req.params.id) },
      data: req.body
    });

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await prisma.todo.delete({
      where: { id: Number(req.params.id) }
    });

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
