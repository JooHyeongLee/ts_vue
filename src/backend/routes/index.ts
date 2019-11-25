import * as combineRouters from 'koa-combine-routers'
import rootRouter from './root';

const router = combineRouters(
  rootRouter,
)

export default router