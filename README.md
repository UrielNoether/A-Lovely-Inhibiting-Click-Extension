# ALICE: A-Lovely-Inhibiting-Click-Extension
Making a fun new custom lock for the Bondage Club

### Bookmark
javascript:(function(){
  let n = document.createElement("script"); // 1. Creates a new <script> element
  n.setAttribute("language", "JavaScript"); // 2. Sets script language (optional)
  n.setAttribute("crossorigin", "anonymous"); // 3. Enables CORS (for cross-origin loading)
  n.setAttribute("src", "https://github.com/UrielNoether/A-Lovely-Inhibiting-Click-Extension/bundle.js"); // 4. Loads DOGS addon script
  n.setAttribute("type", "module"); // 5. Treats script as an ES6 module
  n.onload = () => n.remove(); // 6. Removes the script tag after loading
  document.head.appendChild(n); // 7. Injects the script into the page
})();
