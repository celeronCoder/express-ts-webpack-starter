import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

const { PORT = 3000 } = process.env;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
	res.send({
		message: "hello world from webpack",
	});
});

if (require.main === module) {
	// true if file is executed
	app.listen(PORT, () => {
		console.log("server started at http://localhost:" + PORT);
	});
}

export default app;
