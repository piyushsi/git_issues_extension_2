function styleIssue(data, n) {
  var h3 = document.createElement("span");
  h3.className = "piyush";
  h3.textContent = data
    .split("160px;")[1]
    .split(">")[1]
    .split("</span")[0];
  document.getElementById(`issue_${n}`).append(h3);
}
function github() {
  arr = Array.from(document.querySelectorAll(".Box-row")).map(a => {
    return a.innerText.split("#")[1][0];
  });
  arr.map(n => {
    fetch(`${document.location.href}/${n}`).then(function (response) {
      var data = response.text().then(function (res) {
        return res;
      });
      data.then(d => {
        return (data = `${d}`);
      })
        .then(run => this.styleIssue(data, n))
    });
  });
}
window.github()