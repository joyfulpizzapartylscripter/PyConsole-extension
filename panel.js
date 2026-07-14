let pyodide;

async function boot(){

    pyodide = await loadPyodide({
        indexURL:"pyodide/"
    });

    document.getElementById("output").textContent =
        "PyConsole Ready\n";

}

boot();

document.getElementById("run").onclick = async()=>{

    let code=document.getElementById("editor").value;

    try{

        let result=await pyodide.runPythonAsync(code);

        if(result!==undefined){
            output.textContent+=String(result)+"\n";
        }

    }catch(e){

        output.textContent+=e+"\n";

    }

}
