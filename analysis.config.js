const { execSync } = require('child_process');                        // 子进程操作
const DefaultBranch = 'main';                                         // 默认分支常量
function getGitBranch() {                                             // 获取当然分支
    try{
        const res = execSync('git branch');
        return res.toString("utf8").replace('*','').trim();
    }catch(e){
        return DefaultBranch;
    }
}

module.exports = {
    scanSource: [{                                                          // 必须，待扫描源码的配置信息
        name: 'Code-Demo',                                                                // 必填，项目名称
        path: ['src'],                                                                    // 必填，需要扫描的文件路径
        httpRepo: `https://github.com/liangxin199045/code-demo/blob/${getGitBranch()}/`   // 可选，项目gitlab/github url的访问前缀，用于点击行信息跳转，不填则不跳转
    }],                                                                 
    analysisTarget: 'framework',                                            // 必须，要分析的目标依赖名
    blackApis: ['app.localStorage.set'],                                    // 可选，需要标记的黑名单api，默认为空数组
    browserApis: ['window','document','history','location'],                // 可选，要分析的BrowserApi，默认为空数组
    reportDir: 'docs',                                                      // 可选，生成代码分析报告的目录，默认为report
    isScanVue: true,                                                        // 可选，是否要扫描分析vue中的ts代码，默认为false
    scorePlugin: 'default',                                                 // 可选，评分插件: Function|'default'|null, default表示运行默认插件，null表示不评分
    thresholdScore: 90                                                      // 可选，开启代码告警及阈值分数(0-100)，默认为null即关闭告警逻辑 (CLI模式生效)
}
