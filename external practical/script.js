const dateInput = document.getElementById('dob');
dateInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    const dobValue = dateInput.value;
    const errorMsg = document.getElementById('error-message');
    const resultDiv = document.getElementById('result');

    errorMsg.style.display = 'none';
    resultDiv.style.display = 'none';

    if (!dobValue) {
        errorMsg.innerText = 'Please select a valid Date of Birth.';
        errorMsg.style.display = 'block';
        return;
    }

    const dob = new Date(dobValue);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }
 
    resultDiv.innerHTML = `You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
    resultDiv.style.display = 'block';
}