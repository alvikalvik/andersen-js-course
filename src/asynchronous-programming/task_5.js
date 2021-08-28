const urls = [
  'http://www.json-generator.com/api/json/get/cfVGucaXPC',
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

function fetchUrls(urlsArr) {
  const fetchesArr = urlsArr.map(url => fetch(url).then(r => r.json()));
  Promise.all(fetchesArr).then(resArr => resArr.forEach(el => console.log(el)));
}

function fetchUrlsFromArray(urlsArr) {
  let i = 0;

  function recurciveFetch(url) {
    return fetch(url)
      .then(r => r.json())
      .then(text => {
        console.log(text);
        if (i < urlsArr.length) {
          i += 1;
          return recurciveFetch(urlsArr[i]);
        }
        return null;
      });
  }

  recurciveFetch(urlsArr[i]);
}

fetchUrls(urls);
fetchUrlsFromArray(urls);
