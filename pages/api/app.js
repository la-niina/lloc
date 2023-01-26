export default function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=86400');
  res.status(200).json({
      "versionCode":2,
      "versionName":"1.1.0",
      "content":"1.add something#2.add something",//use # to wrap
      "minSupport":1,	//min support version. while your app versionCode less than  minSupport,You must update app
      "url":"apk download url"
  });
}
