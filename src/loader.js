setTimeout(function() {
  arr = [];
  arr = Array.from(document.querySelectorAll(".Box-row")).map(a => {
    return a.innerText.split("#")[1][0];
  });
  arr.map(n => {
    let req = new XMLHttpRequest();
    fetch(`${document.location.href}/${n}`).then(function(response) {
      switch (response.status) {
        case 200:
          var data = response.text().then(function(res) {
            return res;
          });
          data.then(d => {
            return (data = `${d}`);
          });
          setTimeout(function() {
            var h3 = document.createElement("span");
            h3.className = "piyush";
            if(data.split("160px;")[1]!=undefined){
              h3.textContent = data
              .split("160px;")[1]
              .split(">")[1]
              .split("</span")[0];
            document.getElementById(`issue_${n}`).append(h3);
            }  
          }, 1000);
        case 404:
      }
    });
  });
}, 100);
