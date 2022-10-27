const $myTask = document.querySelector('form')

// Function Create
$myTask.addEventListener('submit', function controller(infosDoEvento) {
    infosDoEvento.preventDefault();

    const $myInput = document.querySelector('input[name="nameTask"').value;
    const $materia = document.querySelector('#idMateria').value
    const $status = document.querySelector('#idStatus').value
    const $myListTask = document.querySelector('.listTask');
    const $rows = $myListTask.rows.length;

    const $myButtos = `<button  onClick="deleteTask(${$rows})" type="button" class="delete btn btn-dark">
                            <i class="bi bi-trash3"></i>
                        </button>
                        <button type="button" class="btn btn-dark">
                            <i class="bi bi-arrow-clockwise"></i>
                        </button>`

    let statusClass = ""
    switch ($status) {
        case "Completo":
            statusClass = "bg-success"
            break;
        case "Em andamento":
            statusClass = "bg-warning"
            break;
        case "Pendente":
            statusClass = "bg-danger"
            break;
    }

    $myListTask.insertAdjacentHTML('beforeend',
    `
    <tr class="${statusClass}" data-row="${$rows}">
        <td class="">${$myInput}</td>
        <td>${$materia}</td>
        <td>${$status}</td>
        <td>${$myButtos}</td>
    </tr>
    `)
})

// Delete
function deleteTask(row) {
    alert(document.querySelector(`[data-row="${row}"]`).cells[0].innerText)
    document.querySelector(`[data-row="${row}"]`).remove()
}

function remove(event) {
    debugger
    console.log(event)
}