var url = require('url'),
    querystring = require('querystring');
        
require('http').createServer(function (req, res) {
  var parsedURL = url.parse(req.url),
      query = querystring.parse(parsedURL.query),
      time = query.time || parsedURL.query,
      type = parsedURL.pathname.replace(/^.*\.(.*?$)/, '$1');
      
  console.log(types[type], time);
  if (types[type]) {
    res.writeHead(200, { 'content-type' : types[type] });
  } else {
    res.writeHead(200, { 'content-type' : 'text/html' });
  }
  
  if (time) {
    setTimeout(function () {
      res.end('/* ' + time + 'ms */');
    }, parseInt(time));
  } else {
    res.end('/* zero hang time */');
  }
}).listen(8888);

var types = {
  'aiff': 'audio/x-aiff',
  'appcache': 'text/cache-manifest',
  'atom': 'application/atom+xml',
  'bmp': 'image/bmp',
  'crx': 'application/x-chrome-extension',
  'css': 'text/css',
  'eot': 'application/vnd.ms-fontobject',
  'gif': 'image/gif',
  'htc': 'text/x-component',
  'html': 'text/html',
  'ico': 'image/vnd.microsoft.icon',
  'ics': 'text/calendar',
  'jpeg': 'image/jpeg',
  'js': 'text/javascript',
  'json': 'application/json',
  'mathml': 'application/mathml+xml',
  'midi': 'audio/midi',
  'mov': 'video/quicktime',
  'mp3': 'audio/mpeg',
  'mp4': 'video/mp4',
  'mpeg': 'video/mpeg',
  'ogg': 'video/ogg',
  'otf': 'font/opentype',
  'pdf': 'application/pdf',
  'png': 'image/png',
  'rtf': 'application/rtf',
  'sh': 'application/x-sh',
  'svg': 'image/svg+xml',
  'swf': 'application/x-shockwave-flash',
  'tar': 'application/x-tar',
  'tiff': 'image/tiff',
  'ttf': 'font/truetype',
  'txt': 'text/plain',
  'wav': 'audio/x-wav',
  'webm': 'video/webm',
  'webp': 'image/webp',
  'woff': 'font/woff',
  'xhtml': 'application/xhtml+xml',
  'xml': 'text/xml',
  'xsl': 'application/xml',
  'xslt': 'application/xslt+xml',
  'zip': 'application/zip'
};