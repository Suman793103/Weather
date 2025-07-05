const apiKey = "3c98186e1c39441d989210658250507";
const form = document.getElementById("weather-form");
const locationInput = document.getElementById("location-input");
const weatherResult = document.getElementById("weather-result");
const locationName = document.getElementById("location-name");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const errorMessage = document.getElementById("error-message");
const suggestions = document.getElementById("suggestions");

// Add loading state management
let isLoading = false;
let debounceTimer = null;

// Popular cities for suggestions - Enhanced with Indian cities
const popularCities = [
  // Major Indian Metropolitan Cities
  { name: "Mumbai", country: "India", icon: "🇮🇳" },
  { name: "Delhi", country: "India", icon: "🇮🇳" },
  { name: "Bangalore", country: "India", icon: "🇮🇳" },
  { name: "Bengaluru", country: "India", icon: "🇮🇳" },
  { name: "Hyderabad", country: "India", icon: "��" },
  { name: "Chennai", country: "India", icon: "🇮🇳" },
  { name: "Kolkata", country: "India", icon: "🇮🇳" },
  { name: "Pune", country: "India", icon: "🇮🇳" },
  { name: "Ahmedabad", country: "India", icon: "🇮🇳" },
  { name: "Jaipur", country: "India", icon: "🇮🇳" },

  // Major Indian Cities
  { name: "Surat", country: "India", icon: "🇮🇳" },
  { name: "Lucknow", country: "India", icon: "��" },
  { name: "Kanpur", country: "India", icon: "🇮🇳" },
  { name: "Nagpur", country: "India", icon: "🇮🇳" },
  { name: "Indore", country: "India", icon: "��" },
  { name: "Thane", country: "India", icon: "🇮🇳" },
  { name: "Bhopal", country: "India", icon: "🇮🇳" },
  { name: "Visakhapatnam", country: "India", icon: "🇮🇳" },
  { name: "Pimpri-Chinchwad", country: "India", icon: "��" },
  { name: "Patna", country: "India", icon: "🇮🇳" },

  // State Capitals and Important Cities
  { name: "Vadodara", country: "India", icon: "🇮🇳" },
  { name: "Ludhiana", country: "India", icon: "🇮🇳" },
  { name: "Agra", country: "India", icon: "🇮🇳" },
  { name: "Nashik", country: "India", icon: "🇮🇳" },
  { name: "Faridabad", country: "India", icon: "��" },
  { name: "Meerut", country: "India", icon: "🇮🇳" },
  { name: "Rajkot", country: "India", icon: "🇮🇳" },
  { name: "Kalyan-Dombivali", country: "India", icon: "🇮🇳" },
  { name: "Vasai-Virar", country: "India", icon: "🇮🇳" },
  { name: "Varanasi", country: "India", icon: "🇮🇳" },

  // Tourist and Cultural Cities
  { name: "Aurangabad", country: "India", icon: "🇮🇳" },
  { name: "Dhanbad", country: "India", icon: "🇮🇳" },
  { name: "Amritsar", country: "India", icon: "��" },
  { name: "Navi Mumbai", country: "India", icon: "🇮🇳" },
  { name: "Allahabad", country: "India", icon: "🇮🇳" },
  { name: "Prayagraj", country: "India", icon: "🇮🇳" },
  { name: "Ranchi", country: "India", icon: "��" },
  { name: "Howrah", country: "India", icon: "🇮🇳" },
  { name: "Coimbatore", country: "India", icon: "🇮🇳" },
  { name: "Jabalpur", country: "India", icon: "��" },

  // More Indian Cities
  { name: "Gwalior", country: "India", icon: "🇮🇳" },
  { name: "Vijayawada", country: "India", icon: "🇮🇳" },
  { name: "Jodhpur", country: "India", icon: "��" },
  { name: "Madurai", country: "India", icon: "🇮🇳" },
  { name: "Raipur", country: "India", icon: "🇮🇳" },
  { name: "Kota", country: "India", icon: "🇮�" },
  { name: "Chandigarh", country: "India", icon: "🇮🇳" },
  { name: "Guwahati", country: "India", icon: "🇮🇳" },
  { name: "Solapur", country: "India", icon: "🇮🇳" },
  { name: "Hubli-Dharwad", country: "India", icon: "🇮🇳" },

  // Coastal and Hill Station Cities
  { name: "Mysore", country: "India", icon: "��" },
  { name: "Mysuru", country: "India", icon: "🇮🇳" },
  { name: "Tiruchirappalli", country: "India", icon: "🇮🇳" },
  { name: "Bareilly", country: "India", icon: "🇮🇳" },
  { name: "Aligarh", country: "India", icon: "🇮🇳" },
  { name: "Tiruppur", country: "India", icon: "🇮�" },
  { name: "Moradabad", country: "India", icon: "🇮🇳" },
  { name: "Jalandhar", country: "India", icon: "🇮🇳" },
  { name: "Bhubaneswar", country: "India", icon: "🇮🇳" },
  { name: "Salem", country: "India", icon: "🇮🇳" },

  // Heritage and Pilgrimage Cities
  { name: "Warangal", country: "India", icon: "��" },
  { name: "Mira-Bhayandar", country: "India", icon: "🇮🇳" },
  { name: "Thiruvananthapuram", country: "India", icon: "🇮🇳" },
  { name: "Bhiwandi", country: "India", icon: "🇮🇳" },
  { name: "Saharanpur", country: "India", icon: "🇮🇳" },
  { name: "Guntur", country: "India", icon: "🇮🇳" },
  { name: "Amravati", country: "India", icon: "��" },
  { name: "Bikaner", country: "India", icon: "🇮🇳" },
  { name: "Noida", country: "India", icon: "�🇳" },
  { name: "Jamshedpur", country: "India", icon: "🇮🇳" },

  // International Cities (Popular destinations)
  { name: "London", country: "United Kingdom", icon: "🇬🇧" },
  { name: "New York", country: "United States", icon: "��" },
  { name: "Paris", country: "France", icon: "🇫�🇷" },
  { name: "Tokyo", country: "Japan", icon: "🇯🇵" },
  { name: "Sydney", country: "Australia", icon: "🇦🇺" },
  { name: "Berlin", country: "Germany", icon: "��" },
  { name: "Dubai", country: "UAE", icon: "🇦🇪" },
  { name: "Singapore", country: "Singapore", icon: "�🇬" },
  { name: "Toronto", country: "Canada", icon: "🇨🇦" },
  { name: "Rome", country: "Italy", icon: "��" },
];

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = locationInput.value.trim();
  if (!location || isLoading) return;

  // Start loading state
  isLoading = true;
  weatherResult.classList.add("hidden");
  errorMessage.classList.add("hidden");

  // Show loading animation
  showLoading();

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
        location
      )}&aqi=yes`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Location not found");
    }

    const data = await response.json();

    // Add weather emoji based on condition
    const weatherEmoji = getWeatherEmoji(data.current.condition.text);

    locationName.innerHTML = `${weatherEmoji} ${data.location.name}, ${data.location.country}`;
    temperature.textContent = `${Math.round(data.current.temp_c)}°C`;
    condition.textContent = data.current.condition.text;

    // Hide loading and show result with animation
    hideLoading();
    setTimeout(() => {
      weatherResult.classList.remove("hidden");
    }, 100);
  } catch (error) {
    hideLoading();
    errorMessage.textContent = `❌ ${
      error.message || "Could not fetch weather data. Try another location."
    }`;
    errorMessage.classList.remove("hidden");
  }
});

// Add Enter key support and auto-clear on focus
locationInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && !isLoading) {
    form.dispatchEvent(new Event("submit"));
  }
});

locationInput.addEventListener("focus", function () {
  errorMessage.classList.add("hidden");
});

// Add suggestion functionality
locationInput.addEventListener("input", function (event) {
  const query = event.target.value.trim();

  // Clear previous debounce timer
  clearTimeout(debounceTimer);

  if (query.length === 0) {
    hideSuggestions();
    return;
  }

  // Debounce the search to avoid too many requests
  debounceTimer = setTimeout(() => {
    showSuggestions(query);
  }, 300);
});

// Hide suggestions when clicking outside
document.addEventListener("click", function (event) {
  if (!form.contains(event.target)) {
    hideSuggestions();
  }
});

// Handle keyboard navigation in suggestions
locationInput.addEventListener("keydown", function (event) {
  const suggestionItems = suggestions.querySelectorAll(".suggestion-item");
  const currentActive = suggestions.querySelector(".suggestion-item.active");

  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (currentActive) {
      currentActive.classList.remove("active");
      const next = currentActive.nextElementSibling;
      if (next) {
        next.classList.add("active");
      } else {
        suggestionItems[0]?.classList.add("active");
      }
    } else {
      suggestionItems[0]?.classList.add("active");
    }
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    if (currentActive) {
      currentActive.classList.remove("active");
      const prev = currentActive.previousElementSibling;
      if (prev) {
        prev.classList.add("active");
      } else {
        suggestionItems[suggestionItems.length - 1]?.classList.add("active");
      }
    } else {
      suggestionItems[suggestionItems.length - 1]?.classList.add("active");
    }
  } else if (event.key === "Enter") {
    if (currentActive) {
      event.preventDefault();
      selectSuggestion(currentActive.textContent.split(",")[0].trim());
    }
  } else if (event.key === "Escape") {
    hideSuggestions();
  }
});

// Auto-clear input when clicking outside after getting results
document.addEventListener("click", function (event) {
  if (
    !form.contains(event.target) &&
    !weatherResult.classList.contains("hidden")
  ) {
    // Optional: uncomment to auto-clear
    // locationInput.value = "";
  }
});

function showLoading() {
  const button = form.querySelector("button");
  button.innerHTML = '<div class="loading"></div>';
  button.disabled = true;
  locationInput.disabled = true;
}

function hideLoading() {
  const button = form.querySelector("button");
  button.innerHTML = "🔍 Get Weather";
  button.disabled = false;
  locationInput.disabled = false;
  isLoading = false;
}

function getWeatherEmoji(condition) {
  const conditionLower = condition.toLowerCase();

  if (conditionLower.includes("sunny") || conditionLower.includes("clear")) {
    return "☀️";
  } else if (
    conditionLower.includes("partly cloudy") ||
    conditionLower.includes("partly")
  ) {
    return "⛅";
  } else if (
    conditionLower.includes("cloudy") ||
    conditionLower.includes("overcast")
  ) {
    return "☁️";
  } else if (
    conditionLower.includes("rain") ||
    conditionLower.includes("drizzle")
  ) {
    return "🌧️";
  } else if (
    conditionLower.includes("thunderstorm") ||
    conditionLower.includes("thunder")
  ) {
    return "⛈️";
  } else if (
    conditionLower.includes("snow") ||
    conditionLower.includes("blizzard")
  ) {
    return "❄️";
  } else if (
    conditionLower.includes("fog") ||
    conditionLower.includes("mist")
  ) {
    return "🌫️";
  } else if (conditionLower.includes("wind")) {
    return "💨";
  } else {
    return "🌤️";
  }
}

function showSuggestions(query) {
  const filteredCities = popularCities.filter(
    (city) =>
      city.name.toLowerCase().includes(query.toLowerCase()) ||
      city.country.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredCities.length === 0) {
    hideSuggestions();
    return;
  }

  // Show more suggestions (8 instead of 6) since we have many Indian cities
  const suggestionHTML = filteredCities
    .slice(0, 8)
    .map(
      (city) => `
    <div class="suggestion-item" onclick="selectSuggestion('${city.name}')">
      <span class="suggestion-icon">${city.icon}</span>
      <div class="suggestion-text">
        <strong>${city.name}</strong>
        <div class="suggestion-country">${city.country}</div>
      </div>
    </div>
  `
    )
    .join("");

  suggestions.innerHTML = suggestionHTML;
  suggestions.classList.remove("hidden");
}

function hideSuggestions() {
  suggestions.classList.add("hidden");
  suggestions.innerHTML = "";
  // Remove active class from all items
  suggestions.querySelectorAll(".suggestion-item").forEach((item) => {
    item.classList.remove("active");
  });
}

function selectSuggestion(cityName) {
  locationInput.value = cityName;
  hideSuggestions();
  // Optional: automatically trigger search
  // form.dispatchEvent(new Event('submit'));
}
