
function setReminder() {
    const name = document.getElementById('medicineName').value.trim();
    const time = document.getElementById('reminderTime').value;
    if (!name || !time) {
        alert('Please fill in both fields.');
        return;
    }

    const list = document.getElementById('reminderList');
    const li = document.createElement('li');
    li.innerHTML = `<span>⏰ ${name} at ${time}</span> <span class="remove-btn" onclick="removeReminder(this)">Remove</span>`;
    list.appendChild(li);

    const [hours, minutes] = time.split(':');
    const now = new Date();
    const reminderTime = new Date();
    reminderTime.setHours(hours);
    reminderTime.setMinutes(minutes);
    reminderTime.setSeconds(0);

    const timeout = reminderTime.getTime() - now.getTime();
    if (timeout >= 0) {
        setTimeout(() => alert(`⏰ Reminder: Take your medicine "${name}"`), timeout);
    }
}

function removeReminder(element) {
    element.parentElement.remove();
}
