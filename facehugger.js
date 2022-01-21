console.log("inside");
addButton();

function addButton(){
  let button = document.createElement("BUTTON");
  button.appendChild(document.createTextNode("[1] Przeanalizuj tę nowelkę"));
  button.id = "fetch-all-novel";
  button.className = "btn btn-sm btn-success";
  button.style.marginBottom = "15px";
  document.querySelector(".row").appendChild(button);
}

function novelMetadata(){


}

const fetchAllNovelBtn = document.getElementById("fetch-all-novel");
if (fetchAllNovelBtn) {
  fetchAllNovelBtn.onclick = function() {
    
  };
}