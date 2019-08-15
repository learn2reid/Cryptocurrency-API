import "./styles.css";

const cors_api_url = "https://cors-anywhere.herokuapp.com/";
const coinUrl =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=e8fd88f2-88a3-4ecb-b9f5-c555eef7bf3c&start=1&limit=3";

function topCrypto() {
  var x = new XMLHttpRequest();
  x.open("GET", cors_api_url + coinUrl, false);
  x.send();

  var resp = JSON.parse(x.responseText),
    cryptos = resp.data,
    result = cryptos.map(coin => ({
      ranking: coin.cmc_rank,
      name: coin.name,
      value: coin.quote["USD"]["price"].toFixed(2) + " " + coin.symbol
    }));

  let capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  result.forEach(function(coin) {
    for (let prop in coin) {
      document.write(capitalize(prop) + ": " + coin[prop] + "<br />");
    }
    document.write("<br />");
  });

  console.table(result);
  return result;
}
topCrypto();
