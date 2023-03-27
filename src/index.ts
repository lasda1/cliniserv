import Express from "express";


const app = Express();

app.get('/ping', function (req: Express.Request, res: Express.Response) {
	res.json({ Pong: new Date() });
});


app.listen(4000, () => {
	console.log('Listening on port 4000. Try these URL:s');
	console.log("http://localhost:4000/ping");
});

export { };
