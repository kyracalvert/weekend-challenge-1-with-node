console.log('js');

$(document).ready(readyNow);

function readyNow() {
    //#submit is the button id
    $('#submit').on('click', getInput);
    $('#employeeList').on('click', '#deleteEmployee', deleteEmployee);
}

let totalMonthly = 0;

function getInput() {
    console.log('button')
    firstName = $('#name').val();
    lastName = $('#surname').val();
    id = $('#idnum').val();
    jobTitle = $('#title').val();
    income = $('#salary').val();
    console.log('#getInput');

    $('#employeeList').append(`
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${jobTitle}</td>
    <td>${income}</td>
    <td> <button id = "deleteEmployee">delete</button> </td>
</tr>
    `)

    totalMonthly = totalMonthly + (income / 12);
    console.log('total monthly:', totalMonthly);
    $('#expenses').html('$' + Math.round(100 * totalMonthly) / 100);

    if (totalMonthly < 20000) {
        $('#expenses').css('background-color', 'yellow')
    }
    if (totalMonthly > 20000) {
        $('#expenses').css('background-color', '#ff6666');
    }

    //clear input fields 
    //input fields that are a child of employee-form
    $('#employee-form input').val('');

}

function deleteEmployee() {
    console.log('deleteEmployee');
    $(this).parent().parent().remove();

}