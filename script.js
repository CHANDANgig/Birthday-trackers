document.getElementById("add-habit").addEventListener("click", function() {
    const habitInput = document.getElementById("habit-input");
    const habitName = habitInput.value;

    if (habitName) {
        const habitTable = document.getElementById("habit-table").getElementsByTagName("tbody")[0];
        const newRow = habitTable.insertRow();

        const habitCell = newRow.insertCell(0);
        habitCell.textContent = habitName;

        for (let i = 1; i <= 7; i++) {
            const checkCell = newRow.insertCell(i);
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkCell.appendChild(checkbox);
        }

        habitInput.value = "";  // Clear input
    }
});

document.getElementById("track-progress").addEventListener("click", function() {
    const habitTable = document.getElementById("habit-table").getElementsByTagName("tbody")[0];
    let totalHabits = 0;
    let completedHabits = 0;

    for (let row of habitTable.rows) {
        totalHabits++;
        for (let cell of row.cells) {
            if (cell.firstChild && cell.firstChild.checked) {
                completedHabits++;
            }
        }
    }

    const percentage = (completedHabits / (totalHabits * 7)) * 100;
    document.getElementById("progress-display").textContent = `You have completed ${percentage.toFixed(2)}% of your habits this week.`;
});
