console.log('JS READY!');

let DateTime = luxon.DateTime.local().toString();

console.log('this is the date', DateTime);

$(document).ready(function () {
    console.log('JQ READY!');
    getList();
    $('#addTask').on('click', createTask)
    $('#listDisplay').on('click', ".deleteBtn", deleteTask)
    $('#listDisplay').on('click', ".toggleBtn", toggleTask)
})

//GET to-do list
function getList() {
    console.log('in getList function');

    $.ajax({
        type: 'GET',
        url: '/to-do'
    }).then(function (response) {
        console.log(response);
        render(response);
    }).catch(function (err) {
        console.log('error in GET', err);
    });
}

function createTask() {
    console.log('in createTask function');

    let task = {
        task: $('#taskIn').val(),
        completed: false,
        timeCreated: DateTime
    }

    addTask(task);
    $('#taskIn').val('');
}

//POST newTask
function addTask(task) {
    console.log('in addTask function', task);

    $.ajax({
        type: 'POST',
        url: '/to-do',
        data: task
    }).then(function (response) {
        console.log('response from server', response);
        getList();
    }).catch(function (err) {
        console.log('error in POST', err);
    })
}

//render
function render(list) {
    console.log('in render function');
    let row;
    $('#listDisplay').empty();

    for (let task of list) {
        console.log(task);

        if (task.completed === true) {
            
            row = $(`
            <tr>
                <td><button class="btn btn-secondary toggleBtn">✔️</button></td>
                <td><span class="small mark">created: ${task.timeCreated}</span>
                    <span class="small mark">created: ${task.timeCompleted}</span></td>
                <td><button class="btn btn-secondary deleteBtn">❌</button></td>
            </tr>
            `)
        } else {

            row = $(`
            <tr>
                <td><button class="btn btn-success toggleBtn">✔️</button></td>
                <td>${task.task}<br><span class="small mark">created: ${task.timeCreated}</span></td>
                <td><button class="btn btn-secondary deleteBtn">❌</button></td>
            </tr>
            `)
        }

        row.data('task', task);

        $('#listDisplay').prepend(row);
    }
}

//DELETE

function deleteTask() {
    console.log('in deleteYes function');

    let task = $(this).closest('tr').data('task')
    id = task.id;
    console.log('delete ID', id);

    $('#myModal').modal('show');
    $('#myModal').on('click', "#deleteYes", deleteYes)
    $('#myModal').on('click', "#deleteNo", deleteNo)

    function deleteYes(){
        $.ajax({
            url: `/to-do/${id}`,
            method: 'DELETE',
        }).then(function (response) {
            console.log(id, 'deleted!');
            getList();
        }).catch(function (err) {
            console.log(err);
        })

        $('#myModal').modal('hide');        
    }

    function deleteNo() {
        $('#myModal').modal('hide');
    }
}

function toggleTask() {
    console.log('in toggleTask function');
    console.log();
    let task = $(this).closest('tr').data('task')
    id = task.id;

    console.log('toggle ID', id);

    $.ajax({
        url: `/to-do/${id}`,
        method: 'PUT',
        data: {
            completed: task.completed
            
        }
    }).then(function (response) {
        console.log(id, 'completed!');
        getList();

    }).catch(function (err) {
        console.log(err);
    })


}