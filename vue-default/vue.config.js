module.exports = {
    chainWebpack : config => {
        config.plugins.delete('prefetch');  // 프리패치 기능 삭제
    }
}