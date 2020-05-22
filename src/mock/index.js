import Mock from "mockjs";
import sliber from "./sliber";

Mock.mock(/\/hhh/, "get", { data: "nihao" });
Mock.mock(/\/slibe/, "get", sliber.getheadsliber);
Mock.mock(/\/rollinglist/, "get", sliber.getrollinglist);

Mock.mock(/\/classify/, "get", (option) => {
  const type = GetRequest(option.url);
  return sliber.getclassify(type);
});

Mock.mock(/\/waterfull/, "get", sliber.getwaterfull);

//获取传来的参数
function GetRequest(url) {
  const query = url.substr(url.indexOf("?")); //获取url中"?"符后的字串
  const str = query.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
  const strs = str.split("="); //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
  return strs[1]; //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
}
