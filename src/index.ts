/*
 * @Description:
 * @Usage:
 * @Author: xxx
 * @Date: 2020-12-24 10:32:06
 * @LastEditTime: 2021-11-20 22:44:45
 */
import kosViews from "koa-views";
import { Koatty } from "koatty_core";


/**
 *
 *
 * @interface OptionsInterface
 */
export interface OptionsInterface {
    root: string;
    opts?: {
        /*
        * Whether to use ctx.body to receive the rendered template string. Defaults to true.
        */
        autoRender?: boolean,
        /*
        * Default extension for your views
        */
        extension?: string,
        /*
        * Map a file extension to an engine
        */
        map?: any,
        /*
        * replace consolidate as default engine source
        */
        engineSource?: any,
        /*
        * These options will get passed to the view engine. This is the time to add partials and helpers etc.
        */
        options?: any,
    }
}

/**
 * default options
 */
const defaultOptions: OptionsInterface = {
    root: `${process.env.ROOT_PATH}/view`, // 模板目录
    opts: {
        autoRender: false,
        extension: 'html',
        map: {
            html: "ejs",
        },
        options: {
            cache: false,
        }
    }
};
/**
 *
 *
 * @export
 * @param {OptionsInterface} options
 * @param {Application} app
 * @returns {*}  {Koa.Middleware}
 */
export function Views(options: OptionsInterface, app: Koatty) {
    const opt = { ...defaultOptions, ...options };
    return kosViews(opt.root, opt.opts);
}