// js/script.js
function loadEra(era) {
  const contentContainer = document.getElementById('content-container')
  fetch(`eras/google_${era}.html`)
    .then((response) => response.text())
    .then((data) => {
      contentContainer.innerHTML = data
    })
}

function showLayout(era) {
  const contentContainer = document.getElementById('content-container')
  fetch(`eras/layouts/google_layout_${era}.html`)
    .then((response) => response.text())
    .then((data) => {
      contentContainer.innerHTML = data
    })
}
