/* Declare Global Variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* Function: displayTemples */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* Function: getTemples */
const getTemples = async () => {
  try {
    const response = await fetch(
      "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );
    if (response.ok) {
      const data = await response.json();
      templeList.length = 0; // Clear the templeList array
      templeList.push(...data); // Add the fetched data to templeList
      displayTemples(templeList);
    }
  } catch (error) {
    console.error("Error fetching temple data: ", error);
  }
};

/* Function: reset */
const reset = () => {
  templesElement.innerHTML = ""; // Clear the content
};

/* Function: sortBy */
const sortBy = (temples) => {
  reset(); // Clear the existing list
  const filter = document.querySelector("#sortBy").value;
  switch (filter) {
    case "utah":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;
    case "nonutah":
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      displayTemples(
        temples.filter(
          (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
        )
      );
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};

/* Event Listener: sortBy Element change */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

/* Call getTemples to fetch and display initial data */
getTemples();
