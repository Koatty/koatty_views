# koatty_views
Template rendering middleware for Koatty.

# 安装
-----

```
npm i koatty_views
```

# 使用
-----

## Koatty

1、项目中增加middleware

```sh
koatty middleware views;
```

2、修改 middleware/ViewsMiddleware.ts:

```js
import { Middleware, IMiddleware } from 'koatty';
import { Views } from 'koatty_view';
import { App } from '../App';

@Middleware()
export class ViewMiddleware implements IMiddleware {
  run(options: any, app: App) {
    return Views(options, app);
  }
}
```

3、项目middleware配置 config/middleware.ts:

```js
...
// 
ViewMiddleware: {
    root: `${process.env.ROOT_PATH}/view`, // 模板目录
    opts: {
        autoRender: false,
        extension: 'html',
        map: {
            html: "ejs",
        },
        options: {
            cache: false, // 开发模式下修改为false, 生产环境请修改为true
        }
    }
},
...

```

4、 模板赋值:

```js
...
// IndexController
/**
 * index 接口
 *
 * @returns
 * @memberof DefaultController
 */
@GetMapping('')
index(): Promise<any> {
    this.ctx.state = { title: 'my title', author: 'queckezz' };
    return this.ctx.render('index.html');
}
...

```