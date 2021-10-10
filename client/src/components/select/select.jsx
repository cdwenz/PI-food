import './select.css'

export default function Select(){

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");

//   checkboxes.style.display = "block"
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
return (
 <>

    <form>    
  <div className="multiselect"> 
    <div className="selectBox" >
      <select >
        <option>Select an option</option>
      </select>
      <div className="overSelect"></div>
     </div> 
    <button onClick={showCheckboxes}>Select</button>
    <div id="checkboxes">
      <label htmlFor="one">
        <input type="checkbox" id="one" />First checkbox</label>
      <label htmlFor="two">
        <input type="checkbox" id="two" />Second checkbox</label>
      <label htmlFor="three">
        <input type="checkbox" id="three" />Third checkbox</label>
    </div>
   </div> 
</form>

</>
)
}

