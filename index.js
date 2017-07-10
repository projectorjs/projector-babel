// @flow
'use strict';

const babel = require('babel-core');

/*::
type BabelOptions = {
  ast?: boolean,
  auxiliaryCommentAfter?: string,
  auxiliaryCommentBefore?: string,
  babelrc?: boolean,
  code?: boolean,
  comments?: boolean,
  compact?: "auto" | boolean,
  env?: { [environment: string]: BabelOptions },
  extends?: string,
  filename?: string,
  filenameRelative?: string,
  generatorOpts?: Object,
  getModuleId?: (moduleName: string) => string | false | null | void,
  highlightCode?: boolean,
  ignore?: Array<string | RegExp>,
  inputSourceMap?: string,
  minified?: boolean,
  moduleId?: string,
  moduleIds?: boolean,
  moduleRoot?: string,
  only?: Array<string | RegExp>,
  parserOpts?: Object,
  plugins?: Array<string | Function | [string | Function, Object]>,
  presets?: Array<string | Function | [string | Function, Object]>,
  retainLines?: boolean,
  resolveModuleSource?: (source: string, filename: string) => string,
  shouldPrintComment?: (commentContents: string) => boolean,
  sourceFileName?: string,
  sourceMaps?: boolean,
  sourceMapTarget?: string,
  sourceRoot?: string,
  sourceType?: "module" | "script",
  wrapPluginVisitorMethod?: (
    pluginAlias: string,
    visitorType: string,
    callback: Function,
  ) => Function,
};

type Options = {
  code: string,
  options?: BabelOptions,
};
*/

exports.transform = (opts /*: Options */) => {
  return new Promise(resolve => {
    let { code, ast } = babel.transform(opts.code, opts.options);
    resolve({ code, ast });
  });
};
