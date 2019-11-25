import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as cors from '@koa/cors';
import * as json from 'koa-json';

import * as path from 'path';
import router from './backend/routes';

const app = new Koa();
// koa-logger 등록
app.use(logger());
// static 파일 경로
app.use(serve(path.join(__dirname, 'public') ));
// bodyParser
app.use(bodyParser());
// cors
app.use(cors());
// json
app.use(json());

// 라우터 등록
app.use(router());
export default app  

app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});