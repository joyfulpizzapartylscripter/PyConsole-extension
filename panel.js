let pyodide;

async function init() {
    pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.28.3/full/"
    });

    pyodide.setStdout({
        batched: text => {
            document.getElementById("output").textContent += text + "\n";
        }
    });

    document.getElementById("output").textContent = "PyConsole Ready\n";
}

init();

document.getElementById("run").onclick = async () => {
    const output = document.getElementById("output");
    const code = document.getElementById("code").value;

    try {
        const result = await pyodide.runPythonAsync(code);

        if (result !== undefined) {
            output.textContent += result + "\n";
        }
    } catch (err) {
        output.textContent += "Error: " + err + "\n";
    }
};
