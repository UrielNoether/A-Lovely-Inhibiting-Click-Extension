# ALICE: A-Lovely-Inhibiting-Click-Extension
Making a new custom lock, purely for fun. This repository is not meant for distribution, and is only meant for testing purposes.

### Bookmarklet
javascript:(function(){
  let n = document.createElement("script");
  n.setAttribute("language", "JavaScript");
  n.setAttribute("crossorigin", "anonymous");
  n.setAttribute("src", "https://urielnoether.github.io/A-Lovely-Inhibiting-Click-Extension/bundle.js");
  n.setAttribute("type", "module");
  n.onload = () => n.remove();
  document.head.appendChild(n);
})();

### DOGS bookmarklet
javascript:(function(){let n=document.createElement("script");n.setAttribute("language","JavaScript");n.setAttribute("crossorigin","anonymous");n.setAttribute("src","https://furryzoi.github.io/Devious-Obligate-Great-Stuff/bundle.js");n.setAttribute("type", "module");n.onload=()=>n.remove();document.head.appendChild(n);})();
