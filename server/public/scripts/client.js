console.log('JS READY!');

// let now = DateTime.now();
// console.log(now);
let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
console.log('this is the date', date);

$(document).ready(function () {
    console.log('JQ READY!');
    getList();

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
        task: 'test task',
        completed: true
    }

    addTask(task);
    //clear inputs
}

//POST newTask
function addTask( task ){
    console.log('in addTask function', task);
    
    $.ajax({
        type: 'POST',
        url: '/to-do',
        data: task
    }).then(function(response){
        console.log('response from server', response);
        getList();
    }).catch(function(err){
        console.log('error in POST', err);
    })
}

//render
function render(list){
    $('#listDisplay').empty();
console.log();
    for(let task of list){
        
        let row = $(`
        <tr>
            <td></td>
            <td>${task.task}</td>
            <td><button>❌</button></td>
        </tr>
        `)

        row.data('task', task);

        $('#listDisplay').append(row);
    }
    }