// Toutes les importations
import express from "express";
import connected from "./database/database.js";
import dotenv from "dotenv";
dotenv.config({ path: "./configs/.env" });
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/User.routes.js";

// Toutes les variables
const app = express();
const PORT = process.env.port;

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

// Toutes la logige de notre serveur

/** Configuration des routes */

// Nous  avons acces au fichier userRoutes et a l'ensemble de ses chemins
app.use(userRoutes);

/** start server only when we have valid connection */
connected()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server connected to http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...!");
  });
