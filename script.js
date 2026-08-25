function trackRepairStatus(event) {
    if (event) {
        event.preventDefault();
    }

    const input = document.getElementById('ticketInput');
    const resultBox = document.getElementById('statusResult');
    const ticketDisplay = document.getElementById('resTicket');

    if (!input || !resultBox || !ticketDisplay) {
        console.error('Tracking elements could not be found.');
        return;
    }

    const inputVal = input.value.trim();

    if (!inputVal) {
        alert('Please enter your repair ticket number.');
        return;
    }

    ticketDisplay.innerText = inputVal.toUpperCase();
    resultBox.style.display = 'block';
}

const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
