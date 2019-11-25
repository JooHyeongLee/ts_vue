/* 
  index 페이지 랜더링
*/
import * as Router from 'koa-router';
import { Context } from 'koa';
const router = new Router();

router.get('/', async (ctx: Context, next) => {
  ctx.body = "test";
})

export default router