const express = require('express');
const cookieParser = require('cookie-parser');
const personRouter = require('./routes/person.routes');
const projectRouter = require('./routes/project.routes');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api', personRouter);
app.use('/api', projectRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));