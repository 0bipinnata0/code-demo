var report={"httpRepoMap":{"Code-Demo":"https://github.com/liangxin199045/code-demo/blob/multi-progress-feature/"},"versionMap":{},"parseErrorInfos":[{"pN":"Code-Demo","httpRepo":"https://github.com/liangxin199045/code-demo/blob/multi-progress-feature/src/pages/setting.vue","file":"src/pages/setting.vue","stack":"SyntaxError: Element is missing end tag.\n    at createCompilerError (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:16:19)\n    at emitError (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:1187:29)\n    at parseElement (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:824:9)\n    at parseChildren (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:650:28)\n    at parseElement (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:816:22)\n    at parseChildren (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:650:28)\n    at Object.baseParse (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:570:23)\n    at Object.parse (/Users/xinliang/code/github/code-demo/node_modules/@vue/compiler-dom/dist/compiler-dom.cjs.js:3049:25)\n    at exports.parseVue (/Users/xinliang/code/github/code-demo/node_modules/code-analysis-ts-multi-progress/lib/parse.js:13:32)\n    at /Users/xinliang/code/github/code-demo/node_modules/code-analysis-ts-multi-progress/lib/analysis.js:308:50"}],"scoreMap":{"score":95,"message":["location.href 属于路由类操作，请使用框架提供的Router API代替","window.FB.login 属于全局类型api，建议请评估影响慎重使用","document.getElementById 属于Dom类型操作api，建议评估影响慎重使用","window.addEventListener 属于全局类型api，建议请评估影响慎重使用","1 个文件解析&分析AST时发生错误，请修复"]},"reportTitle":"Code-Demo代码分析报告","analysisTime":"2023.08.08 19:19:46","mapNames":["methodMap","typeMap","apiMap","browserMap"],"methodMap":{"api.commonRequest.get":{"cN":2,"as":null,"cF":{"Code-Demo&src/api/index.ts":{"pN":"Code-Demo","ls":[6,10]}}},"router.addRouterModule":{"cN":1,"as":null,"cF":{"Code-Demo&src/router/index.ts":{"pN":"Code-Demo","ls":[3]}}},"app.localStorage.set":{"cN":2,"as":null,"cF":{"Code-Demo&src/pages/BasicSettings.vue":{"pN":"Code-Demo","ls":[125]},"Code-Demo&src/pages/Index.vue":{"pN":"Code-Demo","ls":[27]}}},"app.localStorage.get":{"cN":3,"as":null,"cF":{"Code-Demo&src/pages/BasicSettings.vue":{"pN":"Code-Demo","ls":[141,149]},"Code-Demo&src/pages/Index.vue":{"pN":"Code-Demo","ls":[24]}}}},"typeMap":{"APIPromise":{"cN":2,"as":null,"cF":{"Code-Demo&src/api/index.ts":{"pN":"Code-Demo","ls":[5,9]}}},"UserEventType":{"cN":1,"as":null,"cF":{"Code-Demo&src/store/index.ts":{"pN":"Code-Demo","ls":[41]}}}},"apiMap":{"Base":{"cN":1,"as":null,"cF":{"Code-Demo&src/services/connect.ts":{"pN":"Code-Demo","ls":[2]}}},"userInfo.name":{"cN":1,"as":null,"cF":{"Code-Demo&src/components/IcCards.vue":{"pN":"Code-Demo","ls":[82]}}},"ActivePage":{"cN":1,"as":null,"cF":{"Code-Demo&src/components/scTab.vue":{"pN":"Code-Demo","ls":[42]}}},"request.isRight":{"cN":1,"as":"AppRequest","cF":{"Code-Demo&src/pages/Notification.vue":{"pN":"Code-Demo","ls":[92]}}}},"browserMap":{"location.href":{"cN":1,"as":null,"cF":{"Code-Demo&src/router/index.ts":{"pN":"Code-Demo","ls":[18]}}},"window.FB.login":{"cN":1,"as":null,"cF":{"Code-Demo&src/services/connect.ts":{"pN":"Code-Demo","ls":[38]}}},"document.getElementById":{"cN":1,"as":null,"cF":{"Code-Demo&src/components/scrollBar/index.vue":{"pN":"Code-Demo","ls":[32]}}},"window.addEventListener":{"cN":1,"as":null,"cF":{"Code-Demo&src/components/scrollBar/index.vue":{"pN":"Code-Demo","ls":[69]}}}}}