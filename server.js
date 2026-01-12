const express = require('express');
const app = express();
const PORT = 8080;

// Enable CORS so frontend can access the API
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Professional data that matches frontend needs
const professionalData = {
  professionalName: "Nana Kwesi Gyeni",
  base64Image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",  
  nameLink: {
    firstName: "Nana Kwesi",
    url: "https://mrgyeni20.github.io/wdd131/"  
  },
  primaryDescription: " is a passionate web developer specializing in full-stack development.",
  workDescription1: "I love creating efficient and scalable web applications using modern technologies like Node.js, Express, and MongoDB.",
  workDescription2: "Currently studying Web Services at BYU-Idaho and building real-world projects to enhance my skills in backend development.",
  linkTitleText: "Connect with me:",
  linkedInLink: {
    text: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/nana-kwesi-gyeni-a05458367/"  
  },
  githubLink: {
    text: "GitHub Profile",
    link: "https://github.com/MrGyeni20"  
  }
};

// GET endpoint
app.get('/professional', (req, res) => {
  res.json(professionalData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);  // ← Fixed: use backticks, not regular quotes
});