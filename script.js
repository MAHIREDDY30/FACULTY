
function createCard(data) {
  const card = document.createElement('div');
  card.className = 'faculty-card';

  const img = document.createElement('img');
  img.src = data.image_url || 'https://via.placeholder.com/100x120';
  img.alt = data.name;

  const details = document.createElement('div');
  details.className = 'details';
  details.innerHTML = `
    <h2>${data.name}</h2>
    <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
    <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
    <p><strong>Cabin:</strong> ${data.cabin || 'N/A'}</p>
    <p><strong>Specialization:</strong> ${data.specialization || 'N/A'}</p>
    <p><strong>Teaching Rating:</strong> ${data.teaching_rating} (${data.num_teaching_ratings} ratings)</p>
    <p><strong>Attendance Rating:</strong> ${data.attendance_rating} (${data.num_attendance_ratings} ratings)</p>
    <p><strong>Correction Rating:</strong> ${data.correction_rating} (${data.num_correction_ratings} ratings)</p>
  `;

  card.appendChild(img);
  card.appendChild(details);
  return card;
}

document.getElementById('search').addEventListener('input', function () {
  const input = this.value.toLowerCase();
  const results = document.getElementById('results');
  results.innerHTML = '';

  Object.values(facultyData)
    .filter(f => f.name && f.name.toLowerCase().includes(input))
    .forEach(f => results.appendChild(createCard(f)));
});
