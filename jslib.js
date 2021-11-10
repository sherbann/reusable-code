function validateForm(id1, id2){
    validateNotBlank(id2);
    validateNotBlank(id1);
    validateNumber(id1);
}

function validateNotBlank(elementId) {
    let x = elementId.value;
    let id = elementId.id;
    if (x == "") {
      alert(id + " must be filled out");
      document.getElementById(id).style.borderColor="#e52213";
      document.getElementById(id).focus();
      return false;
    } else {
      document.getElementById(id).style.borderColor = null;
    }
  }
  
  function validateNumber(elementId) {
    let id = elementId.id;
    if (isNaN(elementId.value)) {
      alert(id + " must be a number");
      document.getElementById(id).style.borderColor="#e52213";
      document.getElementById(id).focus();
      return false;
    } else {
      document.getElementById(id).style.borderColor = null;
    }
  }
