import Mock from "mockjs";
import sliber from "./sliber";

//登录接口
let tokenkey = "xdclass";
Mock.mock(/\/login/, "get", (option) => {
  const { username, password } = GetRequest(option.url);
  console.log(username, password);
  if ((username == "jingdong" && password == "123456") || (username == "nihoa" && password == "123456")) {
    return {
      code: 0,
      message: "登录成功",
      token: tokenkey + "-" + username + "-" + (new Date().getTime() + 60 * 60 * 1000),
    };
  } else {
    return {
      code: 1,
      message: "用户名或密码不正确",
    };
  }
});

Mock.mock(/\/hhh/, "get", { data: "nihao" });
Mock.mock(/\/slibe/, "get", sliber.getheadsliber);
Mock.mock(/\/rollinglist/, "get", sliber.getrollinglist);
Mock.mock(/\/classify/, "get", (option) => {
  const type = GetRequest(option.url).type;
  console.log(type);
  return sliber.getclassify(type);
});
Mock.mock(/\/waterfull/, "get", sliber.getwaterfull);

//获取传来的参数,仅限一个参数，如果多个，需要遍历
function GetRequest(url) {
  const query = url.substr(url.indexOf("?")); //获取url中"?"符后的字串
  const theRequest = new Object();
  if (query.indexOf("?") != -1) {
    let str = query.substr(1);
    let strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
    }
  }
  console.log(theRequest);
  return theRequest;
}
