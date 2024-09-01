// js/script.js

// Function to load the content of a specific era for the selected company
function loadEra(era) {
  const contentContainer = document.getElementById('content-container')
  fetch(`eras/google_${era}.html`)
    .then((response) => response.text())
    .then((data) => {
      contentContainer.innerHTML = data
    })
}

// Function to load a specific layout for the selected era
function showLayout(era) {
  const contentContainer = document.getElementById('content-container')
  fetch(`eras/layouts/google_layout_${era}.html`)
    .then((response) => response.text())
    .then((data) => {
      contentContainer.innerHTML = data
    })
}

const companies = {
  google: {
    1990: ['google1990_1.jpg', 'google1990_2.jpg'],
    1997: ['google1997_1.jpg', 'google1997_2.jpg'],
    2000: ['google2000_1.jpg', 'google2000_2.jpg'],
    2005: ['google2005_1.jpg', 'google2005_2.jpg'],
    2010: ['google2010_1.jpg', 'google2010_2.jpg'],
    2012: ['google2012_1.jpg', 'google2012_2.jpg'],
    2015: ['google2015_1.jpg', 'google2015_2.jpg'],
    2024: ['google2024_1.jpg', 'google2024_2.jpg'],
  },
  // Add more companies here as needed
}

// Function to toggle dropdown visibility
document.getElementById('company-dropdown').onclick = function () {
  toggleDropdown(document.getElementById('company-list'))
}

document.getElementById('year-dropdown').onclick = function () {
  toggleDropdown(document.getElementById('year-list'))
}

function toggleDropdown(dropdownContent) {
  dropdownContent.classList.toggle('show')
}

// Close dropdowns if clicked outside
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-btn')) {
    closeDropdowns()
  }
}

function closeDropdowns() {
  const dropdowns = document.getElementsByClassName('dropdown-content')
  for (let i = 0; i < dropdowns.length; i++) {
    if (dropdowns[i].classList.contains('show')) {
      dropdowns[i].classList.remove('show')
    }
  }
}

// Function to display the list of companies in the dropdown
function displayCompanies() {
  const companyList = document.getElementById('company-list')
  for (const company in companies) {
    const a = document.createElement('a')
    a.href = '#'
    a.textContent = company
    a.onclick = function (e) {
      e.preventDefault()
      document.getElementById('company-dropdown').textContent = company
      closeDropdowns()
      displayYears(company)
    }
    companyList.appendChild(a)
  }
}

// Function to display the list of years based on the selected company
function displayYears(company) {
  const yearList = document.getElementById('year-list')
  yearList.innerHTML = ''
  document.getElementById('timeline').style.display = 'block'
  document.getElementById('gallery').style.display = 'none'

  for (const year in companies[company]) {
    const a = document.createElement('a')
    a.href = '#'
    a.textContent = year
    a.onclick = function (e) {
      e.preventDefault()
      document.getElementById('year-dropdown').textContent = year
      closeDropdowns()
      displayImages(company, year)
    }
    yearList.appendChild(a)
  }
}

// Function to display images based on the selected company and year
function displayImages(company, year) {
  const imageGallery = document.getElementById('image-gallery')
  imageGallery.innerHTML = ''
  document.getElementById('gallery').style.display = 'block'

  companies[company][year].forEach((image) => {
    const img = document.createElement('img')
    img.src = `images/${company}/${image}`
    img.alt = `${company} UI/UX in ${year}`
    img.classList.add('gallery-img')
    img.onerror = () => console.error(`Failed to load image: ${img.src}`)
    imageGallery.appendChild(img)
  })
}

// Event listener for the blogs link to toggle visibility
document
  .getElementById('blogs-link')
  .addEventListener('click', function (event) {
    event.preventDefault()
    const contentContainer = document.getElementById('content-container')
    contentContainer.style.display =
      contentContainer.style.display === 'none' ||
      contentContainer.style.display === ''
        ? 'block'
        : 'none'
  })

// Event listener for the gallery link to toggle visibility
document
  .getElementById('gallery-link')
  .addEventListener('click', function (event) {
    event.preventDefault()
    const galleryOptions = document.getElementById('gallery-options')
    galleryOptions.style.display =
      galleryOptions.style.display === 'none' ||
      galleryOptions.style.display === ''
        ? 'block'
        : 'none'
  })

// Initialize the company list when the page loads
document.addEventListener('DOMContentLoaded', function () {
  displayCompanies()
  console.log('Page loaded and companies displayed')
})
