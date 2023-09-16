let chemistryInput = document.getElementById("chemistryInput");
let output = document.getElementById("output");
let dataSelect = document.getElementById("dataSelect");

let parser = new Parser("");

function out(event) {
    try {
        parser.updateInput(chemistryInput.value);
        let parseOutput = parser.parse();
        let outObj;
        switch (dataSelect.value) {
            case "data_structure": {
                outObj = parseOutput;
                break;
            }
            case "count": {
                outObj = parseOutput.count();
                break;
            }
            case "atomic_mass": {
                outObj = parseOutput.getMolarMass();
                break;
            }
        }
        output.value = JSON.stringify(outObj, null, 4);
    } catch (err) {
        output.value = `Error: ${err}`;
    }
}

chemistryInput.addEventListener("input", out);
dataSelect.onchange = out;