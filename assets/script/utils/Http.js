const Http = {};

Http.get = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      cb && cb(null, data);
    } else {
      cb && cb('xhr parse Error');
    }
  };
  xhr.onerror = (err) => {
    console.error(err);
    cb && cb('xhr error');
  };

  xhr.open('GET', url, true);
  xhr.send();
};

Http.post = () => { };

Http.getByProxy = (url, proxyUrl, cb) => {
  const newUrl = proxyUrl + '?imgUrl=' + url;
  Http.get(newUrl, cb);
};

export default Http;
