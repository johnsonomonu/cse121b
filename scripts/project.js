document.addEventListener("DOMContentLoaded", () => {
  const stateSelect = document.getElementById("stateSelect");
  const searchButton = document.getElementById("searchButton");
  const universitiesList = document.getElementById("universitiesList");

  // Define the URL to your JSON file (update with the correct path)
  const jsonUrl ="https://johnsonomonu.github.io/universitylisting/unilisting.json";

  // Fetch the JSON data and populate the initial list
  fetchUniversities(jsonUrl)
    .then((data) => displayUniversities(data))
    .catch((error) => console.error("Error:", error));

  // Listen for changes to the state select element
  stateSelect.addEventListener("change", () => {
    const selectedState = stateSelect.value;
    filterAndDisplayUniversities(selectedState);
  });

  // Listen for the search button click
  searchButton.addEventListener("click", () => {
    const selectedState = stateSelect.value;
    filterAndDisplayUniversities(selectedState);
  });

  // Function to fetch universities from the JSON file
  function fetchUniversities(url) {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
  }

  // Function to filter and display universities based on the selected state
  function filterAndDisplayUniversities(selectedState) {
    fetchUniversities(jsonUrl)
      .then((data) => {
        const filteredData = selectedState
          ? data.filter((university) =>
              university.location.includes(selectedState)
            )
          : data;
        displayUniversities(filteredData);
      })
      .catch((error) => console.error("Error:", error));
  }

  // Function to display universities in the universitiesList div
  function displayUniversities(data) {
    universitiesList.innerHTML = "";
    if (data.length === 0) {
      universitiesList.innerHTML =
        "<p>No universities found in this state.</p>";
    } else {
      data.forEach((university) => {
        const universityCard = createUniversityCard(university);
        universitiesList.appendChild(universityCard);
      });
    }
  }

  // Function to create a card for each university
  function createUniversityCard(university) {
    const card = document.createElement("div");
    card.className = "university-card";
    card.innerHTML = `
            <h2>${university.name}</h2>
            <p>Location: ${university.location}</p>
            <p>Contact: ${university.contact}</p>
        `;
    return card;
  }
});
