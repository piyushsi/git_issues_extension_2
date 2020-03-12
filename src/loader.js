setTimeout(function() {
  arr = [];
  arr = Array.from(document.querySelectorAll(".Box-row")).map(a => {
    return a.innerText.split("#")[1][0];
  });
  arr.map(n => {
    let req = new XMLHttpRequest();
    fetch(`${document.location.href}/${n}`).then(function(response) {
      switch (response.status) {
        // status "OK"
        case 200:
          var data = "";
          var a = response.text().then(function(res) {
            return res;
          });
          a.then(d => {
            return (a = `${d}`);
          });
          setTimeout(function() {
            data = a;
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

        // status "Not Found"
        case 404:
          // throw response;
      }
    });
  });
}, 100);
