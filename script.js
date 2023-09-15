function data(){
    fetch('./studentData.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('newData').innerHTML = data.Students[1].Place
    })
}