function checkPrime() {
    const n = parseInt(document.getElementById('primeNum').value);
    const resultElement = document.getElementById('displayResult');
    let isPrime = true;

    if (isNaN(n)) {
        resultElement.innerText = "Please enter a number.";
        resultElement.style.color = "grey";
        return;
    }

    if (n <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        resultElement.innerText = `${n} is a Prime Number!`;
        resultElement.style.color = "green";
    } else {
        resultElement.innerText = `${n} is not a Prime Number!`;
        resultElement.style.color = "red";
    }
}