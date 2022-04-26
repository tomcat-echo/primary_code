import express from "express"
import { getAllUser } from "../controller/user_ctl.js"
// 创建路由对象
const router = new express.Router()
    // user路径下，交给getAllUser处理
router.get('/user', getAllUser)
    // 默认导出
export default router