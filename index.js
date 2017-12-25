var superagent = require('superagent'); 
var cheerio = require('cheerio');
var async = require('async');
var echarts = require('echarts');
var fs = require('fs');

console.log('爬虫程序开始运行......');
/**
 * Crash
 */
superagent
  .get('https://bugly.qq.com/v2/getTrend/appId/09456c3bfc/platformId/1/version/4.2.7/startDate/20171213/endDate/20171224/type/crash')
  // 请求参数
  .query({ dataType: 'trendData' })
  .query({ fsn: 'b47034b7-8941-426f-8e3e-831378d799a2' })
  // Http请求的Header信息
 .set('Accept', 'application/json;charset=utf-8')
 .set('Accept-Encoding', 'gzip, deflate, br')
 .set('Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7')
 .set('Connection', 'keep-alive')
 .set('Content-Type','application/json;charset=utf-8')
 .set('Cookie','pgv_pvi=5771278336; pgv_pvid=7703177098; RK=PJfq3CXrtT; btcu_id=ed70f24fdc9235e8bc045c4c55a836755a3bcd3e79f7b; _gat=1; _qpsvr_localtk=0.6675947196792038; pgv_si=s4917502976; ptui_loginuin=877236822; ptisp=ctc; ptcz=1a8d9589f512c800a8c183b048b4fdc3479ccb47a86c0ca580d218ba766e0cbf; uin=o0877236822; skey=@RVYa2vUoZ; pt2gguin=o0877236822; p_uin=o0877236822; pt4_token=SRHhiEYrFdV2s3Xf4XpIiB2vNCiVFswfLTULDmvBsJM_; p_skey=u60OFF1KrONzk-FCwNbAUt2XTTWVZd*gSiC098QPeHs_; token-skey=909745e0-2991-ed61-d345-4254ffc571c1; token-lifeTime=1514218206; _ga=GA1.2.818044980.1513868604; _gid=GA1.2.2034174074.1514200208; referrer=eyJpdiI6IkltVWJJYVVURnVWZkUrSzl1NDB0UEE9PSIsInZhbHVlIjoiM3JSZkQxNVpKRjluWnZsOWxlS0w3MDVtWW5rbEhGXC9IWEJPaElaZERTd0MzSzE5Wk83ZlZRMHMxd1U3dnBcL2VUTGRjS2Ywa1VhUFhLeXpXMVo2TERpeklUdnpETDh6QUViVFpVeDNoVHFqWHVNU0VvRHJVTmpncnFNNlV0dXp4RW5KeHBIWGJMcW42UmhsV3owakJTUzAwRUpJY0FzSlZrQVwvSWxyVmZPam5JPSIsIm1hYyI6IjU5ZGQxNjk5MGM4MDVmNDE0MjA5NmUxZTMwZjJlNzI1OWUyMWVmYmNlMWE1OTE0MmM1NzliNTQ2ZGE4MTQ4YzUifQ%3D%3D; bugly_session=eyJpdiI6IkFDTEdmdVwvdW10aHNDYmZtK1UwQ0FRPT0iLCJ2YWx1ZSI6InhTbk5qTTVBXC9yUDdXWEhCTUl4Y1F6V29KcDl6QW83b044TGNpbGt5UEVUNUs0TUluUnh1aURFaGJrY3pFOWc5UWxTeGNOaVBGbmNaWjBiQTNSODNNdz09IiwibWFjIjoiYTVlZjk2NTM4YWEwNmY0NGYzNTU2MzAyMWU2YWQxYjFiOTA4ZWU4YjZmZDM5OTIwZWQ4MGY2YTFhNmI2MmVjMiJ9')
 .set('Host','bugly.qq.com')
 .set('Referer','https://bugly.qq.com/v2/crash-reporting/dashboard/09456c3bfc?date1=last_15_day&endDate1=20171224&isRealTime=0&pid=1&startDate1=20171210&trendVersion=4.2.7')
 .set('User-Agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36')
 .set('X-token','527241668')
 .end(function(err, res){      	
      // 请求返回后的处理
      var buglyData = JSON.stringify(JSON.parse(res.text).ret.data);

      /**
       * filename, 必选参数，文件名
       * data, 写入的数据，可以字符或一个Buffer对象
       * [options],flag,mode(权限),encoding
       * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
       */
      fs.writeFile('crash.json', buglyData, function (err) {
      if(err) {
            console.error(err);
          } else {
            console.log('写入crash.json成功');
          }
      });

  });
/**
 * ANR
 */
superagent
  .get('https://bugly.qq.com/v2/getTrend/appId/09456c3bfc/platformId/1/version/4.2.7/startDate/20171213/endDate/20171224/type/anr')
  // 请求参数
  .query({ dataType: 'trendData' })
  .query({ fsn: '5d21f77f-e0e3-45de-bd24-be31afdfc576' })
  // Http请求的Header信息
 .set('Accept', 'application/json;charset=utf-8')
 .set('Accept-Encoding', 'gzip, deflate, br')
 .set('Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7')
 .set('Connection', 'keep-alive')
 .set('Content-Type','application/json;charset=utf-8')
 .set('Cookie','pgv_pvi=5771278336; pgv_pvid=7703177098; RK=PJfq3CXrtT; btcu_id=ed70f24fdc9235e8bc045c4c55a836755a3bcd3e79f7b; _gat=1; _qpsvr_localtk=0.6675947196792038; pgv_si=s4917502976; ptui_loginuin=877236822; ptisp=ctc; ptcz=1a8d9589f512c800a8c183b048b4fdc3479ccb47a86c0ca580d218ba766e0cbf; uin=o0877236822; skey=@RVYa2vUoZ; pt2gguin=o0877236822; p_uin=o0877236822; pt4_token=SRHhiEYrFdV2s3Xf4XpIiB2vNCiVFswfLTULDmvBsJM_; p_skey=u60OFF1KrONzk-FCwNbAUt2XTTWVZd*gSiC098QPeHs_; token-skey=909745e0-2991-ed61-d345-4254ffc571c1; token-lifeTime=1514218206; _ga=GA1.2.818044980.1513868604; _gid=GA1.2.2034174074.1514200208; referrer=eyJpdiI6IkltVWJJYVVURnVWZkUrSzl1NDB0UEE9PSIsInZhbHVlIjoiM3JSZkQxNVpKRjluWnZsOWxlS0w3MDVtWW5rbEhGXC9IWEJPaElaZERTd0MzSzE5Wk83ZlZRMHMxd1U3dnBcL2VUTGRjS2Ywa1VhUFhLeXpXMVo2TERpeklUdnpETDh6QUViVFpVeDNoVHFqWHVNU0VvRHJVTmpncnFNNlV0dXp4RW5KeHBIWGJMcW42UmhsV3owakJTUzAwRUpJY0FzSlZrQVwvSWxyVmZPam5JPSIsIm1hYyI6IjU5ZGQxNjk5MGM4MDVmNDE0MjA5NmUxZTMwZjJlNzI1OWUyMWVmYmNlMWE1OTE0MmM1NzliNTQ2ZGE4MTQ4YzUifQ%3D%3D; bugly_session=eyJpdiI6IkFDTEdmdVwvdW10aHNDYmZtK1UwQ0FRPT0iLCJ2YWx1ZSI6InhTbk5qTTVBXC9yUDdXWEhCTUl4Y1F6V29KcDl6QW83b044TGNpbGt5UEVUNUs0TUluUnh1aURFaGJrY3pFOWc5UWxTeGNOaVBGbmNaWjBiQTNSODNNdz09IiwibWFjIjoiYTVlZjk2NTM4YWEwNmY0NGYzNTU2MzAyMWU2YWQxYjFiOTA4ZWU4YjZmZDM5OTIwZWQ4MGY2YTFhNmI2MmVjMiJ9')
 .set('Host','bugly.qq.com')
 .set('Referer','https://bugly.qq.com/v2/crash-reporting/dashboard/09456c3bfc?date1=last_15_day&endDate1=20171224&isRealTime=0&pid=1&startDate1=20171210&trendVersion=4.2.7')
 .set('User-Agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36')
 .set('X-token','527241668')
 .end(function(err, res){       
      // 请求返回后的处理
      var buglyData = JSON.stringify(JSON.parse(res.text).ret.data);

      /**
       * filename, 必选参数，文件名
       * data, 写入的数据，可以字符或一个Buffer对象
       * [options],flag,mode(权限),encoding
       * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
       */
      fs.writeFile('anr.json', buglyData, function (err) {
      if(err) {
            console.error(err);
          } else {
            console.log('写入anr.json成功');
          }
      });

  });