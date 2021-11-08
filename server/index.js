const app = require('express')();
const path = require('path');
const port = 80; // Default HTTP Port

// Serve the 
app.get("/", (req, res) => {
	res.send(path.join(__dirname, '../build/will_add_once_built.html'));
});

// Easter Egg 😏
app.get("/flushed", (req, res) => {
	res.send("😳");
});

// Instead of "cannot get..." let's make it a *bit* better
app.get("*", (req, res) => {
	res.send("Something went wrong with your request... Go to http://eldonwilliams.com/ to use the caliper-reader application.");
});

app.listen(port || 80, () => {
	console.log(`Caliper Reader server live on port: ${port} *or defaulted to 80*.`);
});