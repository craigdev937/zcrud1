import express from "express";
import helmet from "helmet";
import logger from "morgan";
import mongoose from "mongoose";
import { config } from "./config/keys";
import { userRt } from "./routes/userRt";
import { todoRt } from "./routes/todoRt";

(async () => {
    await mongoose.connect(config.MONGO_URI)
    .then(() => console.log("MongoDB is now Connected!"))
    .catch((error) => console.log(error));
    const app: express.Application = express();
    app.use(helmet());

    // CORS Setup.
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods",
                "POST, GET, PUT, PATCH, DELETE");
            return res.status(200).json({"status message": "OK"});
        };
        next();
    });

    // Middleware
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(logger("dev"));

    // Routes and Port
    app.use("/api/auth", userRt);
    app.use("/api/todos", todoRt);
    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})();




