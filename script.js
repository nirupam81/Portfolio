const skills = [
    { name: "C", level: "Intermediate" },
    { name: "C++", level: "Intermediate" },
    { name: "Python", level: "Beginner" },
    { name: "HTML", level: "Beginner" },
    { name: "CSS", level: "Beginner" },
    { name: "JavaScript", level: "Beginner" },
    { name: "Bootstrap", level: "Beginner" },
];

const skillsContainer = document.getElementById("skills-container");
skills.map((item, index) => {
    if(index % 3 === 0) {
        const skillRow = document.createElement("div");
        skillRow.className = "row skill-row";
        skillsContainer.appendChild(skillRow);
    }

    const skillRow = document.getElementsByClassName("skill-row");
    const skillCard = document.createElement("div");
    skillCard.className = "col-md-4 skill-card";

    const blocks = {
        "Beginner": 1,
        "Intermediate": 2,
        "Advanced": 3
    };

    skillCard.innerHTML = `
        <h3>${item.name}</h3>
        <p>Level: ${item.level}</p>

        ${blocks[item.level] === 1 ?
        `<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: 33%"></div>
        </div>` : ""}

        ${blocks[item.level] === 2 ?
        `<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: 66%"></div>
        </div>` : ""}

        ${blocks[item.level] === 3 ?
        `<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: 33%"></div>
        </div>` : ""}
    `;

    skillRow[skillRow.length - 1].appendChild(skillCard);
})