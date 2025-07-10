# 🌤️ Modern Weather App

A beautiful, responsive weather application built with vanilla HTML, CSS, and JavaScript. Get real-time weather information for any location worldwide with an elegant glassmorphism design and smooth animations.

![Weather App Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 **Modern UI/UX**

- **Glassmorphism Design**: Beautiful glass-like interface with backdrop blur effects
- **Gradient Backgrounds**: Eye-catching animated gradient backgrounds
- **Smooth Animations**: Hover effects, loading animations, and seamless transitions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### 🔍 **Smart Search**

- **Auto-complete Suggestions**: Intelligent city suggestions with country flags
- **Extensive City Database**: 70+ Indian cities plus major international destinations
- **Keyboard Navigation**: Arrow keys and Enter support for suggestions
- **Debounced Search**: Optimized performance with search delays

### 🌡️ **Weather Information**

- **Real-time Data**: Current temperature, weather conditions, and location details
- **Weather Emojis**: Dynamic weather icons based on current conditions
- **Location Display**: City name with country information
- **Error Handling**: User-friendly error messages for invalid locations

### 🚀 **Performance & Accessibility**

- **Fast Loading**: Optimized with preloaded fonts and efficient code
- **Loading States**: Visual feedback during API calls
- **Error Recovery**: Graceful handling of network issues
- **Mobile Optimized**: Touch-friendly interface for mobile users

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: [WeatherAPI](https://weatherapi.com/) for real-time weather data
- **Fonts**: Google Fonts (Inter)
- **Design**: Glassmorphism, CSS Grid/Flexbox, CSS Animations

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for weather data

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Get your API key**

   - Visit [WeatherAPI.com](https://weatherapi.com/)
   - Sign up for a free account
   - Get your API key from the dashboard

3. **Configure the API key**

   - Open `script.js`
   - Replace the API key on line 1:

   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

4. **Launch the app**

   - Simply open `index.html` in your web browser
   - Or use a local server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using Live Server extension in VS Code
   ```

5. **Start exploring!**

   - Enter any city name
   - Use the auto-complete suggestions
   - Enjoy the beautiful weather display

## 📁 Project Structure

```
weather-app/
├── index.html          # Main HTML file
├── style.css           # Styles and animations
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🌍 Supported Locations

The app includes intelligent suggestions for:

### 🇮🇳 **Indian Cities** (70+ cities)

- **Metropolitan**: Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata
- **State Capitals**: Jaipur, Bhopal, Lucknow, Chandigarh, Thiruvananthapuram
- **Major Cities**: Pune, Ahmedabad, Surat, Indore, Nagpur, Coimbatore
- **Cultural Centers**: Varanasi, Amritsar, Madurai, Mysore, Jodhpur

### 🌏 **International Cities**

- London, New York, Paris, Tokyo, Sydney, Berlin, Dubai, Singapore, Toronto, Rome

## 🎯 Usage Examples

1. **Quick Search**: Type "Mumbai" and press Enter
2. **Auto-complete**: Type "Del" and select "Delhi" from suggestions
3. **International**: Search for "London" or "New York"
4. **Error Handling**: Try an invalid location to see error messages

## 🔧 Customization

### Adding More Cities

Edit the `popularCities` array in `script.js`:

```javascript
{ name: "YourCity", country: "YourCountry", icon: "🏙️" }
```

### Changing the Theme

Modify the CSS variables in `style.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #ff6b6b;
}
```

### API Configuration

The app uses WeatherAPI's current weather endpoint:

```
https://api.weatherapi.com/v1/current.json?key={API_KEY}&q={LOCATION}&aqi=yes
```

## 📱 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Ideas for Contributions

- Add weather forecast (5-day)
- Implement geolocation detection
- Add weather maps integration
- Create dark/light theme toggle
- Add more weather details (humidity, pressure, etc.)

## 🐛 Known Issues

- API rate limits may apply with free WeatherAPI account
- Some very small towns might not be found
- Requires internet connection for weather data

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [WeatherAPI](https://weatherapi.com/) for providing free weather data
- [Google Fonts](https://fonts.google.com/) for the beautiful Inter font family
- The open-source community for inspiration and best practices

## 📞 Contact

- **Author**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ and ☕ by [Suman Kumar]
