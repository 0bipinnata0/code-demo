var report={"importItemMap":{"environment":{"callOrigin":null,"callFiles":["Code-Demo&src/components/addVariationDialog/index.vue"]},"APP":{"callOrigin":null,"callFiles":["Code-Demo&src/components/IcCards.vue"]},"userInfo":{"callOrigin":null,"callFiles":["Code-Demo&src/components/IcCards.vue"]},"app":{"callOrigin":null,"callFiles":["Code-Demo&src/pages/BasicSettings.vue","Code-Demo&src/pages/Index.vue"]},"request":{"callOrigin":"AppRequest","callFiles":["Code-Demo&src/pages/Notification.vue"]},"api":{"callOrigin":null,"callFiles":["Code-Demo&src/api/index.ts"]},"APIPromise":{"callOrigin":null,"callFiles":["Code-Demo&src/api/index.ts"]},"getUser":{"callOrigin":null,"callFiles":["Code-Demo&src/message.ts"]},"router":{"callOrigin":null,"callFiles":["Code-Demo&src/router/index.ts"]},"UserEventType":{"callOrigin":null,"callFiles":["Code-Demo&src/store/index.ts"]}},"versionMap":{},"parseErrorInfos":[{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/src/pages/setting.vue","file":"src/pages/setting.vue","stack":"SyntaxError: Element is missing end tag.\n    at createCompilerError (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:16:19)\n    at emitError (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:1187:29)\n    at parseElement (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:824:9)\n    at parseChildren (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:650:28)\n    at parseElement (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:816:22)\n    at parseChildren (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:650:28)\n    at Object.baseParse (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:570:23)\n    at Object.parse (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-dom/dist/compiler-dom.cjs.js:3049:25)\n    at exports.parseVue (/Users/xinliang/code/github/code-demo/node_modules/code-analysis-ts/lib/parse.js:13:32)\n    at parseFiles.forEach (/Users/xinliang/code/github/code-demo/node_modules/code-analysis-ts/lib/analysis.js:306:50)"}],"scoreMap":{"score":85,"message":["app.localStorage.set 属于黑名单api，请勿使用","location.href 属于黑名单api，请勿使用","document.getElementById 属于Dom类型操作api，建议评估影响慎重使用","window.addEventListener 属于全局类型api，建议请评估影响慎重使用","location.href 属于路由类操作，请使用框架提供的Router API代替","window.FB.login 属于全局类型api，建议请评估影响慎重使用","1 个文件解析&分析AST时发生错误，请修复"]},"reportTitle":"Code-Demo代码分析报告","analysisTime":"2022.12.06 17:58:22","mapNames":["methodMap","typeMap","apiMap","browserMap"],"methodMap":{"app.localStorage.set":{"callNum":2,"callOrigin":null,"callFiles":{"Code-Demo&src/pages/BasicSettings.vue":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[125]},"Code-Demo&src/pages/Index.vue":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[27]}},"isBlack":true},"app.localStorage.get":{"callNum":3,"callOrigin":null,"callFiles":{"Code-Demo&src/pages/BasicSettings.vue":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[141,149]},"Code-Demo&src/pages/Index.vue":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[24]}}},"api.commonRequest.get":{"callNum":2,"callOrigin":null,"callFiles":{"Code-Demo&src/api/index.ts":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[6,10]}}},"router.addRouterModule":{"callNum":1,"callOrigin":null,"callFiles":{"Code-Demo&src/router/index.ts":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[3]}}}},"typeMap":{"APIPromise":{"callNum":2,"callOrigin":null,"callFiles":{"Code-Demo&src/api/index.ts":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[5,9]}}},"UserEventType":{"callNum":1,"callOrigin":null,"callFiles":{"Code-Demo&src/store/index.ts":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[41]}}}},"apiMap":{"userInfo.name":{"callNum":1,"callOrigin":null,"callFiles":{"Code-Demo&src/components/IcCards.vue":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[82]}}},"request.isRight":{"callNum":1,"callOrigin":"AppRequest","callFiles":{"Code-Demo&src/pages/Notification.vue":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[92]}}}},"browserMap":{"document.getElementById":{"callNum":1,"callOrigin":null,"callFiles":{"Code-Demo&src/components/scrollBar/index.vue":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[32]}}},"window.addEventListener":{"callNum":1,"callOrigin":null,"callFiles":{"Code-Demo&src/components/scrollBar/index.vue":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[69]}}},"location.href":{"callNum":1,"callOrigin":null,"callFiles":{"Code-Demo&src/router/index.ts":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[18]}},"isBlack":true},"window.FB.login":{"callNum":1,"callOrigin":null,"callFiles":{"Code-Demo&src/services/connect.ts":{"projectName":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/main/","lines":[38]}}}}}