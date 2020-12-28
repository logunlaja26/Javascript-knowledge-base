const key = "Nht7n9vV9wc9cudLRLJIQ0CmdNrHEB2t";

const getWeather = async (location_id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${location_id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// getCity("London")
//   .then((data) => {
//     return getWeather(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

//getWeather("328328");
