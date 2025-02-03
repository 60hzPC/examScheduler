document.getElementById('exam-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const roomNumber = document.getElementById('room-number').value;
    const buildingName = document.getElementById('building-name').value;
    const subject = document.getElementById('subject').value;
    const courseCode = document.getElementById('course-code').value;
    const instructor = document.getElementById('instructor').value;
    const program = document.getElementById('program').value;
    const yearLevel = document.getElementById('year-level').value;
    const section = document.getElementById('section').value;
    const time = document.getElementById('time').value;
    const date = document.getElementById('date').value;

    const scheduleTable = document.getElementById('schedule-table').getElementsByTagName('tbody')[0];

    const newRow = scheduleTable.insertRow();
    newRow.innerHTML = `
        <td>${roomNumber}</td>
        <td>${buildingName}</td>
        <td>${subject}</td>
        <td>${courseCode}</td>
        <td>${instructor}</td>
        <td>${program}</td>
        <td>${yearLevel}</td>
        <td>${section}</td>
        <td>${time}</td>
        <td>${date}</td>
    `;

    // Reset the form
    document.getElementById('exam-form').reset();
});
