import express from "express";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
