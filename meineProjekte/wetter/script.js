const output = document.querySelector(".output");
navigator.geolocation.getCurrentPosition(loadWeather, handleError);
function handleError(error) {
    console.error(error);
}

async function loadWeather(position) {
            try {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const response = await fetch(
                        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,weather_code,is_day`
                    );                
                const weather = await response.json();
                
                    if (weather.current.weather_code === 0) {
                    output.innerHTML = `
                    <div class="emoji">☀️</div>
                    <h1>${weather.current.temperature_2m}°</h1>
                    <h2>${weather.current.precipitation}mm</h2>
                    `
                    }

                    else if (weather.current.weather_code >= 1 && weather.current.weather_code <= 3) {
                    output.innerHTML = `
                    <div class="emoji">🌤️</div>
                    <h1>${weather.current.temperature_2m}°</h1>
                    <h2>${weather.current.precipitation}mm</h2>
                    `
                    }

                    else if (weather.current.weather_code === 45 || weather.current.weather_code === 48) {
                    output.innerHTML = `
                    <div class="emoji">🌫️</div>
                    <h1>${weather.current.temperature_2m}°</h1>
                    <h2>${weather.current.precipitation}mm</h2>
                    `
                    }

                    else if (weather.current.weather_code >= 51 && weather.current.weather_code <= 57) {
                    output.innerHTML = `
                    <div class="emoji">🌦️</div>
                    <h1>${weather.current.temperature_2m}°</h1>
                    <h2>${weather.current.precipitation}mm</h2>
                    `
                    }

                    else if (weather.current.weather_code >= 61 && weather.current.weather_code <= 67) {
                    output.innerHTML = `
                    <div class="emoji">🌧️</div>
                    <h1>${weather.current.temperature_2m}°</h1>
                    <h2>${weather.current.precipitation}mm</h2>
                    `
                    }

                    else if (weather.current.weather_code >= 71 && weather.current.weather_code <= 77) {
                    output.innerHTML = `
                    <div class="emoji">🌨️</div>
                    <h1>${weather.current.temperature_2m}°</h1>
                    <h2>${weather.current.precipitation}mm</h2>
                    `
                    }

                    else if (weather.current.weather_code >= 80 && weather.current.weather_code <= 82) {
                    output.innerHTML = `
                    <div class="emoji">🌦️</div>
                    <h1>${weather.current.temperature_2m}°</h1>
                    <h2>${weather.current.precipitation}mm</h2>
                    `
                    }
                    
                    else if (
                    weather.current.weather_code === 85 ||
                    weather.current.weather_code === 86
                    ) {
                    output.innerHTML = `
                        <div class="emoji">🌨️</div>
                        <h1>${weather.current.temperature_2m}°</h1>
                        <h2>${weather.current.precipitation}mm</h2>
                    `
                    }

                    else if (weather.current.weather_code >= 95 && weather.current.weather_code <= 99) {
                    output.innerHTML = `
                    <div class="emoji">⛈️</div>
                    <h1>${weather.current.temperature_2m}°</h1>
                    <h2>${weather.current.precipitation}mm</h2>
                    `
                    }

                    if (weather.current.is_day === 1) {
                        document.body.style.backgroundColor = "aliceblue";
                        document.body.style.color = "darkblue";
                    }

                    else {
                        document.body.style.backgroundColor = "darkblue";
                        document.body.style.color = "aliceblue";
                    }
                    
                }

            catch(error) {
                console.error(error);
                }
};
