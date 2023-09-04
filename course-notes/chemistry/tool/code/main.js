let chemistryInput = document.getElementById("chemistryInput");
let output = document.getElementById("output");

let parser = new Parser("H2O");

output.innerHTML = parser.updateInput;

chemistryInput.addEventListener("input", event => {
    parser.updateInput(event.target.value);
    let parseOutput = parser.parse(1);
    output.innerHTML = event.target.value;
    if (parseOutput.className() === "Molecule" || parseOutput.className() === "Molecule") {
        output.innerHTML = JSON.stringify(parseOutput.count?.());
    } else output.innerHTML = "";
})