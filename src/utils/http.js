import { Toast } from 'antd-mobile';

export default function Http({
  url,
  method = 'post',
  headers = {},
  body = {},
  setLoading,
  setResult,
}) {
  setLoading && setLoading(true);

  const token = localStorage.getItem('token');
  let defaultHeader = {
    'Content-type': 'application/json'
  };
  defaultHeader = token ? {
    ...defaultHeader,
    token
  } : defaultHeader;

  let params;
  if (method.toUpperCase() === 'GET') {
    params = undefined;
  } else {
    params = {
      headers: {
        ...defaultHeader,
        ...headers
      },
      method,
      body: JSON.stringify(body)
    }
  }

  return new Promise((resolve, reject) => {
    fetch('/api' + url, params)
      .then(res => {
        const resJson = res.json()
        console.log(resJson);

        return resJson
      })
      .then(res => {

        if (res.status === 200) {
          resolve(res.data);
          setResult && setResult(res.data);
        } else {
          if (res.status === 1001) {
            window.location.href = '/login?from=' + window.location.pathname;
            localStorage.clear();
          }
          Toast.fail(res.errMsg);
          reject(res.errMsg);
        }
      })
      .catch(err => {
        Toast.fail(err);
        reject(err);
      })
      .finally(() => {
        setLoading && setLoading(false);
      })
  });
}