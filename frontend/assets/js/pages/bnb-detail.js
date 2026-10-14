document.addEventListener('DOMContentLoaded', () => {
  const phone = '254700123456';
  const params = new URLSearchParams(window.location.search);
  const stay = window.CSH_STAYS[params.get('id')];
  const error = document.getElementById('bnb-page-error');
  const root = document.getElementById('bnb-detail-root');
  const form = document.getElementById('bnb-booking-form');

  if (!stay) {
    error.textContent = 'We could not find that stay. Browse available short stays and choose another property.';
    error.style.display = 'block';
    return;
  }

  const setText = (id, value) => { document.getElementById(id).textContent = value; };
  const money = (amount) => 'KES ' + amount.toLocaleString('en-KE');
  const dateInput = (id) => document.getElementById(id);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dateValue = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const checkIn = dateInput('bw-checkin');
  const checkOut = dateInput('bw-checkout');
  const guests = dateInput('bw-guests');
  const errorMessage = document.getElementById('bw-error');

  document.title = `${stay.title} in ${stay.area} — Cherry Smart Homes`;
  setText('bnb-breadcrumb-title', stay.title);
  setText('bnb-title', stay.title);
  setText('bnb-location', `${stay.area}, Nairobi`);
  setText('bnb-guests-val', stay.guests);
  setText('bnb-bedrooms-val', stay.beds);
  setText('bnb-bathrooms-val', stay.baths);
  setText('bnb-description', stay.description);
  setText('bw-price-amount', money(stay.price));
  document.getElementById('bnb-hero-img').src = stay.img;
  document.getElementById('bnb-hero-img').alt = `${stay.title} in ${stay.area}`;
  document.getElementById('bnb-amenities-grid').innerHTML = stay.tags.map((amenity) => `<span>${amenity}</span>`).join('');
  guests.max = stay.guests;
  guests.value = Math.min(Number(params.get('guests')) || 1, stay.guests);
  checkIn.min = dateValue(today);
  checkOut.min = dateValue(today);
  root.style.display = '';

  function updateEstimate() {
    const start = checkIn.value ? new Date(`${checkIn.value}T00:00:00`) : null;
    const end = checkOut.value ? new Date(`${checkOut.value}T00:00:00`) : null;
    const nights = start && end ? Math.round((end - start) / 86400000) : 0;
    setText('bw-summary-nights-label', `${Math.max(nights, 0)} night${nights === 1 ? '' : 's'}`);
    setText('bw-summary-nights-amount', money(Math.max(nights, 0) * stay.price));
    setText('bw-summary-total', money(Math.max(nights, 0) * stay.price));
  }

  checkIn.addEventListener('change', () => {
    if (checkIn.value) {
      const nextDay = new Date(`${checkIn.value}T00:00:00`);
      nextDay.setDate(nextDay.getDate() + 1);
      checkOut.min = dateValue(nextDay);
      if (!checkOut.value || checkOut.value <= checkIn.value) checkOut.value = dateValue(nextDay);
    }
    updateEstimate();
  });
  checkOut.addEventListener('change', updateEstimate);
  guests.addEventListener('change', () => {
    guests.value = Math.max(1, Math.min(Number(guests.value) || 1, stay.guests));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nights = checkIn.value && checkOut.value
      ? Math.round((new Date(`${checkOut.value}T00:00:00`) - new Date(`${checkIn.value}T00:00:00`)) / 86400000)
      : 0;
    const name = document.getElementById('bw-name').value.trim();
    const guestPhone = document.getElementById('bw-phone').value.trim();

    if (!checkIn.value || !checkOut.value || nights < 1 || checkIn.value < dateValue(today)) {
      errorMessage.textContent = 'Choose a valid check-in date and a check-out date after it.';
      return;
    }
    if (!name || !guestPhone) {
      errorMessage.textContent = 'Enter your name and phone number to request a booking.';
      return;
    }

    errorMessage.textContent = '';
    const message = [
      `Hi Cherry Smart Homes, I would like to book ${stay.title} in ${stay.area}.`,
      `Check-in: ${checkIn.value}`,
      `Check-out: ${checkOut.value} (${nights} nights)`,
      `Guests: ${guests.value}`,
      `Estimate: ${money(nights * stay.price)}`,
      `Name: ${name}`,
      `Phone: ${guestPhone}`
    ].join('\n');
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
});