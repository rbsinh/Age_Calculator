let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("age");

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function parseDate(input) {
    const [day, month, year] = input.split('/').map(Number);
    return new Date(year, month - 1, day);
}

const today = new Date();
console.log(`today::${today}`);
currDate.innerText = `Today's Date is: ${formatDate(today)}`;

CalcAge.addEventListener("click", () => {
    const input = dateOfBirth.value; // Get the value from the input field
        const birthDate = parseDate(input);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        const d = today.getDate() - birthDate.getDate(); // Fixed variable naming
        if (m < 0 || (m === 0 && d < 0)) {
            age--;
        }
        displayAge.style.visibility = "visible";
        Age.innerText = `You are ${age} years old.`;
    }
)
