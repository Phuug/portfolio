let habits = JSON.parse(
  localStorage.getItem("habits")
) || [
  {
    name: "Früh aufstehen",
    category: "A"
  },
  {
    name: "Sport",
    category: "A"
  },
  {
    name: "Lesen",
    category: "B"
  }
];

const app = document.getElementById("app");
const today = new Date();

let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let deleteMode = false;

function render() {

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const monthNames = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];

  let tableHTML = `
    <h2>
      ${monthNames[currentMonth]} ${currentYear}
    </h2>

    <div class="month-controls">
      <button id="prev-month">←</button>
      <button id="next-month">→</button>
    </div>

    <div class="table-container">

      <table>

        <tr>
          <th>Gewohnheit</th>
  `;

  for (let day = 1; day <= daysInMonth; day++) {

    tableHTML += `
      <th>${day}</th>
    `;

  }

  tableHTML += `
        </tr>
  `;

  habits.forEach((habit, index) => {

    tableHTML += `
      <tr class="${habit.category}">

        <td>

          <div class="habit-name-wrapper">

            <span>
              ${habit.name}
            </span>

          ${
            deleteMode
            ? `
                <button
                  class="move-up-btn"
                  data-index="${index}"
                >
                  ⬆️
                </button>

                <button
                  class="move-down-btn"
                  data-index="${index}"
                >
                  ⬇️
                </button>

                <button
                  class="delete-btn"
                  data-habit="${habit.name}"
                >
                  🗑️
                </button>
              `
            : ""
          }

          </div>

        </td>
    `;

    for (let day = 1; day <= daysInMonth; day++) {

      tableHTML += `
        <td
          class="day-cell empty"
          data-habit="${habit.name}"
          data-day="${day}"
        ></td>
      `;

    }

    tableHTML += `
      </tr>
    `;

  });

  tableHTML += `
      </table>

    </div>

    <div class="controls">

      <button id="add-btn">
        +
      </button>

      <button id="edit-btn">
      ✏️
      </button>

    </div>
  `;

  app.innerHTML = tableHTML;

  setupMonthButtons();

  setupCells();

  setupHabitButtons();

  setupDeleteButtons();

  setupMoveButtons();

}

function setupMonthButtons() {

  const prevMonthBtn =
    document.getElementById("prev-month");

  const nextMonthBtn =
    document.getElementById("next-month");

  prevMonthBtn.addEventListener("click", () => {

    currentMonth--;

    if (currentMonth < 0) {

      currentMonth = 11;
      currentYear--;

    }

    render();

  });

  nextMonthBtn.addEventListener("click", () => {

    currentMonth++;

    if (currentMonth > 11) {

      currentMonth = 0;
      currentYear++;

    }

    render();

  });

}

function setupCells() {

  const cells =
    document.querySelectorAll(".day-cell");

  cells.forEach(cell => {

    const habitName = cell.dataset.habit;
    const day = cell.dataset.day;

    const key =
      `${habitName}-${currentYear}-${currentMonth}-${day}`;

    let state =
      localStorage.getItem(key) || 0;

    state = Number(state);

    applyState(cell, state);

    cell.addEventListener("click", () => {

      state++;

      if (state > 3) {

        state = 0;

      }

      localStorage.setItem(key, state);

      applyState(cell, state);

    });

  });

}

function setupHabitButtons() {

  const addBtn =
    document.getElementById("add-btn");

  const editBtn =
    document.getElementById("edit-btn");

  addBtn.addEventListener("click", () => {

    openPopup();

  });

  editBtn.addEventListener("click", () => {

    deleteMode = !deleteMode;

    render();

  });

}

function openPopup() {

  const overlay =
    document.createElement("div");

  overlay.classList.add("popup-overlay");

  overlay.innerHTML = `
    <div class="popup">

      <input
        type="text"
        id="habit-name"
        placeholder="Gewohnheit"
      >

      <div class="category-select">

        <button
          class="category-btn category-a active-category"
          data-category="A"
        >
        wichtig
        </button>

        <button
          class="category-btn category-b"
          data-category="B"
        >
        optional
        </button>

      

        <button id="save-habit">
            ✓
        </button>
        </div>
    </div>
  `;

  document.body.appendChild(overlay);

  let selectedCategory = "A";

  const categoryButtons =
    overlay.querySelectorAll(".category-btn");

  categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

      categoryButtons.forEach(btn => {

        btn.classList.remove(
          "active-category"
        );

      });

      button.classList.add(
        "active-category"
      );

      selectedCategory =
        button.dataset.category;

    });

  });

  const saveButton =
    document.getElementById("save-habit");

  saveButton.addEventListener("click", () => {

    const input =
      document.getElementById("habit-name");

    const habitName =
      input.value.trim();

    if (!habitName) {

      return;

    }

    habits.push({
      name: habitName,
      category: selectedCategory
    });

    localStorage.setItem(
      "habits",
      JSON.stringify(habits)
    );

    overlay.remove();

    render();

  });

  overlay.addEventListener("click", event => {

    if (event.target === overlay) {

      overlay.remove();

    }

  });

}

function setupDeleteButtons() {

  const deleteButtons =
    document.querySelectorAll(".delete-btn");

  deleteButtons.forEach(button => {

    button.addEventListener("click", () => {

      const habitName =
        button.dataset.habit;

      habits = habits.filter(habit => {

        return habit.name !== habitName;

      });

      localStorage.setItem(
        "habits",
        JSON.stringify(habits)
      );

      render();

    });

  });

}

function setupMoveButtons() {

  const upButtons =
    document.querySelectorAll(".move-up-btn");

  const downButtons =
    document.querySelectorAll(".move-down-btn");

  upButtons.forEach(button => {

    button.addEventListener("click", () => {

      const index =
        Number(button.dataset.index);

      if (index === 0) return;

      [
        habits[index - 1],
        habits[index]
      ] = [
        habits[index],
        habits[index - 1]
      ];

      localStorage.setItem(
        "habits",
        JSON.stringify(habits)
      );

      render();

    });

  });

  downButtons.forEach(button => {

    button.addEventListener("click", () => {

      const index =
        Number(button.dataset.index);

      if (
        index === habits.length - 1
      ) return;

      [
        habits[index],
        habits[index + 1]
      ] = [
        habits[index + 1],
        habits[index]
      ];

      localStorage.setItem(
        "habits",
        JSON.stringify(habits)
      );

      render();

    });

  });

}

function applyState(cell, state) {

  cell.classList.remove(
    "empty",
    "done",
    "failed",
    "allowed"
  );

  if (state === 0) {

    cell.classList.add("empty");

  }

  if (state === 1) {

    cell.classList.add("done");

  }

  if (state === 2) {

    cell.classList.add("failed");

  }

  if (state === 3) {

    cell.classList.add("allowed");

  }

}

render();