function styleIssue(data, n) {
  var h3 = document.createElement("span");
  h3.className = "issues_project";
  count = 0;

  data
    .split("160px;")
    .map(a => {
      return a.split(">")[1];
    })
    .map(a => {
      if (a.includes("</span")) {
        return count++;
      }
    });

  if (count === 1) {
    h3.textContent = data
      .split("160px;")[1]
      .split(">")[1]
      .split("</span")[0];
    document.getElementById(`issue_${n}`).append(h3);
  } else if (count > 1) {
    for (var i = 1; i < count + 1; i++) {
      var a = document.createElement("span");
      a.className = "issues_project";
      a.innerText = `${
        data
          .split("160px;")
          [i].split(">")[1]
          .split("</span>")[0]
          .split("</span")[0]
      }`;
      document.getElementById(`issue_${n}`).append(a);
    }
  }
}

function github() {
  arr = Array.from(document.querySelectorAll(".Box-row")).map(a => {
    if (a.innerText.split("#")[1] != undefined) {
      return a.innerText.split("#")[1].split(" ")[0];
    }
  });

  arr.map(n => {
    fetch(`${document.location.href.split("?")[0]}/${n}`).then(function(
      response
    ) {
      var data = response.text().then(function(res) {
        return res;
      });
      data
        .then(d => {
          return (data = `${d}`);
        })
        .then(run => this.styleIssue(data, n));
    });
  });
}
window.github();