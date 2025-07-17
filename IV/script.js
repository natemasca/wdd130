const virtues = {
  "Curiosity": [
    "I often find myself wondering why things are the way they are.",
    "I enjoy learning about topics outside my usual interests.",
    "I regularly ask deep or challenging questions."
  ],
  "Intellectual Humility": [
    "I admit when I don’t know something.",
    "I’m open to the possibility that I could be wrong.",
    "I value learning more than appearing smart."
  ],
  "Intellectual Autonomy": [
    "I make up my own mind after hearing others' opinions.",
    "I resist going along with a group if I disagree on principle.",
    "I value forming beliefs based on evidence over social pressure."
  ],
  "Intellectual Integrity": [
    "I try to avoid double standards in how I evaluate arguments.",
    "I admit inconsistencies in my beliefs when I find them.",
    "I’m willing to revise my opinions if I find better reasons."
  ],
  "Intellectual Courage": [
    "I’m willing to express unpopular opinions if I believe they’re true.",
    "I seek out views that challenge my own.",
    "I’m not afraid to examine evidence that may go against my beliefs."
  ],
  "Intellectual Perseverance": [
    "I keep trying when I don’t understand something right away.",
    "I don’t give up on a difficult intellectual task easily.",
    "I try to work through confusion rather than avoid it."
  ],
  "Confidence in Reason": [
    "I believe reasoning and evidence are the best guides to knowledge.",
    "I try to resolve disagreements by using logic.",
    "I value clear thinking over persuasion or rhetoric."
  ],
  "Fair-mindedness": [
    "I try to understand opposing views before criticizing them.",
    "I avoid misrepresenting others’ arguments.",
    "I consider evidence even when it goes against what I want to believe."
  ],
  "Attentiveness": [
    "I listen closely when others explain things.",
    "I notice subtle differences in ideas or arguments.",
    "I try to avoid distractions when learning or problem-solving."
  ],
  "Open-mindedness": [
    "I’m open to revising my beliefs in light of new evidence.",
    "I enjoy hearing perspectives that differ from my own.",
    "I’m slow to reject ideas just because they’re unfamiliar."
  ],
  "Intellectual Tenacity": [
    "I continue thinking about problems even when they frustrate me.",
    "I work through complex questions even when there’s no easy answer.",
    "I feel energized by difficult intellectual puzzles."
  ],
  "Intellectual Thoroughness": [
    "I ask follow-up questions to get to the bottom of things.",
    "I avoid settling for superficial answers.",
    "I prefer to understand ideas deeply rather than just quickly."
  ]
};

window.onload = () => {
  const form = document.getElementById("quizForm");

  for (let virtue in virtues) {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.innerText = virtue;
    fieldset.appendChild(legend);

    virtues[virtue].forEach((statement, i) => {
      const label = document.createElement("label");
      label.innerText = statement;

      const select = document.createElement("select");
      select.name = `${virtue}_${i}`;
      for (let j = 1; j <= 5; j++) {
        const option = document.createElement("option");
        option.value = j;
        option.innerText = j;
        select.appendChild(option);
      }
      label.appendChild(select);
      fieldset.appendChild(label);
    });

    form.appendChild(fieldset);
  }
};

function calculateScores() {
  const results = document.getElementById("results");
  results.innerHTML = "<h2>Results:</h2>";
  const scores = {};

  for (let virtue in virtues) {
    let sum = 0;
    virtues[virtue].forEach((_, i) => {
      const val = parseInt(document.querySelector(`select[name="${virtue}_${i}"]`).value);
      sum += val;
    });
    scores[virtue] = sum;

    let level = "Possible Growth Area";
    if (sum >= 13) level = "Strength";
    else if (sum >= 10) level = "Moderate";

    const p = document.createElement("p");
    p.innerHTML = `<strong>${virtue}</strong>: ${sum}/15 – <em>${level}</em>`;
    results.appendChild(p);
  }
}
