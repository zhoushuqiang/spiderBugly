var superagent = require('superagent'); 
var cheerio = require('cheerio');
var async = require('async');
var echarts = require('echarts');
var fs = require('fs');

console.log('爬虫程序开始运行......');

superagent
	.get('https://bugly.qq.com/v2/getTrend/appId/09456c3bfc/platformId/1/version/4.2.7/startDate/20171217/endDate/20171223/type/crash')
    // 请求参数
    .query({ dataType: 'trendData' })
    .query({ fsn: 'b47034b7-8941-426f-8e3e-831378d799a2' })
    // Http请求的Header信息
   .set('Accept', 'application/json;charset=utf-8')
   .set('Accept-Encoding', 'gzip, deflate, br')
   .set('Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7')
   .set('Connection', 'keep-alive')
   .set('Content-Type','application/json;charset=utf-8')
   .set('Cookie','pgv_pvi=5771278336; pgv_pvid=7703177098; RK=PJfq3CXrtT; btcu_id=ed70f24fdc9235e8bc045c4c55a836755a3bcd3e79f7b; ptui_loginuin=877236822; ptcz=1a8d9589f512c800a8c183b048b4fdc3479ccb47a86c0ca580d218ba766e0cbf; pt2gguin=o0877236822; token-skey=4fc9db31-ab08-aae0-5512-8551f85dbfde; token-lifeTime=1514118146; _ga=GA1.2.818044980.1513868604; _gid=GA1.2.824269590.1514043575; _gat=1; referrer=eyJpdiI6InhBMG1Ra2hIZ2VqZWFIVlNHbE4zd1E9PSIsInZhbHVlIjoiN2ZyQ3NicGRsMHBsMHFBUUpWU0hUTUtJcktsXC9qN0QzWkhQUWFpcDdXYjErOCttVnJyXC9uVGZ5ZHVlcFZCXC8weDhGM1wvakloMk1JVURubUhBcFphYVd3NVBYaG56MGUwcHpcL3crczErbXBhVGQwdFJoOFhDVWhVVU5EN2o4S3dwdkY1UFZwdkFSZXVWdW9JM1hPS21URVZMMWFIVVplYjRCZjhKYmNuQ3lBdTA9IiwibWFjIjoiMjBiZjYwMzU2YTE2ZTA3MWZhNDEzNTA0ZDdiNGU1ZTI4MjczNjg4ZTllNDZlMmEyZDY1MDY3MzIxZmFmZTFkMCJ9; bugly_session=eyJpdiI6IjdoSVlkWHdiSHBpZVwvNHlrTGhGRDhBPT0iLCJ2YWx1ZSI6ImlCaGhSZTZJN0JXc2NRZUFcLzBlQnRjclhJZDhpKzlLM1dYTURtdGtIWTNQWVlrbURBU0xJN0dRODh6bWtOMzFqQkRncCtxaVhvQWQ0NWwrSm1EZ1JCdz09IiwibWFjIjoiOWUwN2NkNzliYmU1OGEwMGFlNjBhMmMyZjc3ZDc5MGI2YzViNTY0Nzg3YWE0Nzc2ODQ5NTQ1NGMyNGRlZTcwMSJ9')
   .set('Host','bugly.qq.com')
   .set('Referer','https://bugly.qq.com/v2/crash-reporting/dashboard/09456c3bfc?date1=last_7_day&endDate1=20171223&isRealTime=0&pid=1&startDate1=20171217&trendVersion=4.2.7')
   .set('User-Agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36')
   .set('X-token','1575427555')
   .end(function(err, res){      	
        // 请求返回后的处理
        var buglyData = JSON.stringify(JSON.parse(res.text).ret.data);

        /**
         * filename, 必选参数，文件名
         * data, 写入的数据，可以字符或一个Buffer对象
         * [options],flag,mode(权限),encoding
         * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
         */
        fs.writeFile('index.json', buglyData, function (err) {
        if(err) {
              console.error(err);
            } else {
              console.log('写入成功');
            }
        });

    });