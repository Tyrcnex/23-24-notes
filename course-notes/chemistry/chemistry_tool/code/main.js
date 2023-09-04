let chemistryInput = document.getElementById("chemistryInput");
let output = document.getElementById("output");

let parser = new Parser("");

chemistryInput.addEventListener("input", event => {
    output.value = "ERR";
    parser.updateInput(event.target.value);
    let parseOutput = parser.parse(1);
    if (parseOutput.className) {
        output.value = JSON.stringify(parseOutput.getMolarMass(), null, 4);
    } else output.value = "";
})