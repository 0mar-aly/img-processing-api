import express from "express";
import routes from "./routes/router";

// Setting up the server using Express
const app = express();
const port = 3000;

app.use("/", routes);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

export { app };
