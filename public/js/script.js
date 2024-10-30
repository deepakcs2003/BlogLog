document.addEventListener('DOMContentLoaded', function(){
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const icon = document.getElementById('dark-icon');
  const body = document.body;
  const header = document.querySelector('.header');
  
  // Initial setup based on saved dark mode preference
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode == 'enabled') {
    body.classList.add('dark-mode');
    icon.classList.add('fa-sun');
    header.style.backgroundColor = '#1a1a1a'; // Set dark background for header
  } else {
    body.classList.remove('dark-mode');
    icon.classList.add('fa-moon');
    header.style.backgroundColor = 'white'; // Set light background for header
  }
  
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
      
        if (body.classList.contains('dark-mode')){
          localStorage.setItem('darkMode','enabled');
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
          header.style.backgroundColor = '#1a1a1a'; // Change to dark background
        } else {
          localStorage.setItem('darkMode','disabled');
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
          header.style.backgroundColor = '#FAF5EE'; // Change to light background
        }
    });
  }
  const allButtons = document.querySelectorAll('.searchBtn');
  const searchBar = document.querySelector('.searchBar');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');

  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function() {
      searchBar.style.visibility = 'visible';
      searchBar.classList.add('open');
      this.setAttribute('aria-expanded', 'true');
      searchInput.focus();
    });
  }

  searchClose.addEventListener('click', function() {
    searchBar.style.visibility = 'hidden';
    searchBar.classList.remove('open');
    this.setAttribute('aria-expanded', 'false');
  });
});