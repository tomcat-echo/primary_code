import express from "express";
import router from "./Router/user_router.js";
const app = express()

app.use('/api', router);
app.listen(80, () => {
    console.log('server running at http://120.0.0.1');
})