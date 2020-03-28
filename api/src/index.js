const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = Router()

router.get('/', ctx => {
  ctx.body = {
    running: true,
  }
})

app.use(router.routes())
app.listen(3000)
