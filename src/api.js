export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4c3e2d9150msh6b01825a4ead429p194b2bjsn42b93e69193c",// enter your rapid api key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const geo = {
  options: { geoApiOptions },
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
  key: '4c3e2d9150msh6b01825a4ead429p194b2bjsn42b93e69193c'
}

export const weather = {
  current: 'https://api.openweathermap.org/data/2.5/weather?',
  forecast: 'https://api.openweathermap.org/data/2.5/forecast?',
  key: '4fdce55d989f37e51e5cd7bba4198549',
}

