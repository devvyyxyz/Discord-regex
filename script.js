function copyToClipboard(elementId) {
    const regexCode = document.getElementById(elementId).innerText;
    const tempInput = document.createElement("textarea");
    tempInput.value = regexCode;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Copied: " + regexCode);
}
