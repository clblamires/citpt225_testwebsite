window.onload = () => {
    const year = (new Date()).getFullYear();
    document.querySelector("#copyright").innerHTML = "Copyright " + year + " Casey Blamires";
}