document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const resultsContainer = document.getElementById("results");

  function createFacultyCard(faculty) {
    const card = document.createElement("div");
    card.className = "faculty-card";

    const img = document.createElement("img");
    img.src = faculty.image_url || "https://via.placeholder.com/100";
    img.alt = faculty.name;

    const name = document.createElement("h2");
    name.textContent = faculty.name;

    const email = document.createElement("p");
    email.textContent = faculty.email || "Email not available";

    const ratings = document.createElement("p");
    ratings.textContent = `📊 Ratings - T: ${faculty.teaching_rating?.toFixed(2) || "N/A"} / C: ${faculty.correction_rating?.toFixed(2) || "N/A"} / A: ${faculty.attendance_rating?.toFixed(2) || "N/A"}`;

    const ratedBy = document.createElement("p");
    ratedBy.textContent = `👥 Rated by - T: ${faculty.num_teaching_ratings || 0}, C: ${faculty.num_correction_ratings || 0}, A: ${faculty.num_attendance_ratings || 0}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(ratings);
    card.appendChild(ratedBy);

    return card;
  }

  function renderResults(query) {
    resultsContainer.innerHTML = "";
    const searchTerm = query.toLowerCase();

    const matched = Object.values(facultyData).filter(faculty =>
      faculty.name?.toLowerCase().includes(searchTerm)
    );

    if (matched.length === 0) {
      resultsContainer.innerHTML = "<p style='color:#888;'>No matching faculty found.</p>";
      return;
    }

    matched.forEach(faculty => {
      const card = createFacultyCard(faculty);
      card.style.opacity = 0;
      resultsContainer.appendChild(card);
      setTimeout(() => {
        card.style.transition = "opacity 0.6s ease";
        card.style.opacity = 1;
      }, 10);
    });
  }

  searchInput.addEventListener("input", e => {
    renderResults(e.target.value);
  });

  renderResults(""); // Initial load
});
