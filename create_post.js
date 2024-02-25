function chooseFile() {
    document.getElementById('myfile').click();
}

function displayFileName() {
    var fileInput = document.getElementById('myfile');
    var fileDisplay = document.getElementById('fileDisplay');

    if (fileInput.files.length > 0) {
        var reader = new FileReader();

        reader.onload = function (e) {
            fileDisplay.style.backgroundImage = "url('" + e.target.result + "')";
            fileDisplay.style.backgroundSize = "cover";
            fileDisplay.style.backgroundPosition = "center";
            fileDisplay.style.border = "none";
            fileDisplay.style.textAlign = "center";
            fileDisplay.textContent = ''; // Remove any previous text content
        };

        reader.readAsDataURL(fileInput.files[0]);
    } else {
        fileDisplay.style.backgroundImage = "none";
        fileDisplay.style.border = "1px solid #ccc";
        fileDisplay.style.textAlign = "center";
        fileDisplay.textContent = 'Preview will appear here';
    }
}

function submitForm() {
    document.getElementById('postForm').submit();
}

