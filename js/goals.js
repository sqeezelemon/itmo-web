function createGoal(event) {
    event.preventDefault();

    const goal = {
        title: document.getElementById("goal-title").value,
        deadline: document.getElementById("goal-deadline").value
    }

    let goals = localStorage.getItem("goals");
    goals = JSON.parse(goals) ?? [];
    goals.push(goal);
    goals.sort((l, r) => {
        return l.deadline - r.deadline;
    })

    localStorage.setItem("goals", JSON.stringify(goals));
    renderGoals(goals);
    document.getElementById("new-goal").reset();
}

function renderGoals(goals) {
    const tbody = document.getElementById("goals-table").querySelector("tbody");
    tbody.innerHTML = ""
    goals.forEach(goal => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${goal.title}</td>\n<td>${goal.deadline}</td>`
        tbody.appendChild(tr);
    })
}

window.onload = function() {
    const goals = localStorage.getItem("goals");
    if (goals) {
        renderGoals(JSON.parse(goals));
    }
}