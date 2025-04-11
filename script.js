// Data premiery: 3 maja 2025, godzina 15:00
const premiereDate = new Date('2025-05-03T15:00:00');

// Kod dostępu do edycji
const accessCode = "7432";

function updateCountdown() {
  const now = new Date();
  const timeDiff = premiereDate - now;

  if (timeDiff <= 0) {
    document.getElementById('timer').textContent = 'Premiera już się rozpoczęła!';
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById('timer').textContent =
    `${days} dni, ${hours} godz., ${minutes} min., ${seconds} sek.`;
}

// Obsługa edycji
document.getElementById('edit-button').addEventListener('click', () => {
  const enteredCode = document.getElementById('access-code').value;
  if (enteredCode === accessCode) {
    document.getElementById('edit-form').style.display = 'block';
  } else {
    alert("Nieprawidłowy kod dostępu!");
  }
});

document.getElementById('save-button').addEventListener('click', () => {
  const newTitle = document.getElementById('new-title').value;
  const newDate = document.getElementById('new-date').value;

  if (newTitle) {
    document.getElementById('song-title').textContent = `"${newTitle}"`;
  }

  if (newDate) {
    const formattedDate = new Date(newDate).toLocaleString('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    document.getElementById('release-date').innerHTML = `Data premiery: <strong>${formattedDate}</strong>`;
  }

  document.getElementById('edit-form').style.display = 'none';
  alert("Dane zostały zaktualizowane!");
});

// Aktualizacja co sekundę
setInterval(updateCountdown, 1000);
updateCountdown();
