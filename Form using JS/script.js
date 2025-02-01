let students = []

const UiMaker = () => {
    document.getElementById("studentList").innerHTML=""
    for(let i = 0; i< students.length; i++){
        //create tag
        let name = document.createElement("h1")
        name.innerHTML = students[i].name

        let course = document.createElement("h2")
        course.innerHTML = students[i].course

        let grid = document.createElement("h2")
        grid.innerHTML = students[i].grid

        document.getElementById("studentList").append(name)
        document.getElementById("studentList").append(course)
        document.getElementById("studentList").append(grid)
    }
}

const handleStudentData = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById('name').value,
        course: document.getElementById('course').value,
        grid: document.getElementById('grid').value
    }
    students.push(data);

    UiMaker()

}
document.getElementById("studentData").addEventListener("submit",handleStudentData)