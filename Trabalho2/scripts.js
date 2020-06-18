var tableId = '#table-conteudo';
var inputId = '#addListTextInput';
var nameTextInputId = '#name-text-input';
var salaryNumberInputId = '#salary-number-input';
var ageNumberInputId = '#age-number-input';
var avatarTextInputId = '#avatar-text-input';
var createButtonId = '#create-button';
var saveButtonId = '#save-button';
var cancelButtonId = '#cancel-button';
var posAttribute = 'posId';
var currentEditId;

function startComponents() {
    const createButton = $(createButtonId);
    createButton.click(createNewEmployee);
    const saveButton = $(saveButtonId);
    saveButton.click(saveEmployeeEdit);
    $(cancelButtonId).click(clearFields);

    createMode();
}

function clearFields() {
    $(nameTextInputId).val('');
    $(salaryNumberInputId).val('');
    $(ageNumberInputId).val('');
    $(avatarTextInputId).val('');

    createMode();
}

function loadEmployeeList() {
    console.log('Buscando empregados');

    const employeeRequest = new XMLHttpRequest();
    employeeRequest.open('GET', 'http://rest-api-employees.jmborges.site/api/v1/employees', true);
    employeeRequest.onload = function (e) {
        const response = e.target.response;
        const employeeList = JSON.parse(response).data;

        console.log('Empregados encontrados: ' + response);

        renderList(employeeList);
    };
    employeeRequest.send();
}

function renderList(contentList) {
    const table = $(tableId);
    table.empty();

    contentList.forEach(employee => {
        table.append(createTableRow(employee));
    });
}

function createTableRow(employee) {
    const row = $('<tr></tr>');

    const id = createTableData(employee.id);
    const name = createTableData(employee.employee_name);
    const salary = createTableData(employee.employee_salary);
    const age = createTableData(employee.employee_age);
    const avatar = createTableData(employee.profile_image);

    const actions = createActions(employee.id);

    row.append(id, name, salary, age, avatar, actions);

    return row;
}

function createTableData(text) {
    return $('<td></td>').text(text);
}

function createActions(employeeId) {
    const edit = $('<button></button>').text('editar').addClass('acao').click(function () {
        editEmployee(employeeId);
    });
    const div = '<div class=\'divisor\'></div>';
    const del = $('<button></button>').text('excluir').addClass('acao').click(function () {
        deleteEmployee(employeeId);
    });

    return $('<td></td>').append(edit, div, del);
}

function createNewEmployee() {
    console.log('Criando novo empregado');

    const employee = getEmployeeInfo();

    const createRequest = new XMLHttpRequest();
    createRequest.open('POST', 'http://rest-api-employees.jmborges.site/api/v1/create', true);
    createRequest.setRequestHeader('content-type', 'application/json');
    createRequest.onload = function (e) {
        console.log('Empregado criado');

        clearFields();
        loadEmployeeList();
    };
    createRequest.send(JSON.stringify(employee));
}

function editEmployee(employeeId) {
    console.log('Editando empregado ' + employeeId);

    getEmployee(employeeId);
}

function saveEmployeeEdit() {
    console.log('Terminando edição do empregado ' + currentEditId);

    const employee = getEmployeeInfo();

    const saveEmployeeRequest = new XMLHttpRequest();
    saveEmployeeRequest.open('PUT', 'http://rest-api-employees.jmborges.site/api/v1/update/' + currentEditId, true);
    saveEmployeeRequest.onload = function (e) {
        clearFields();
    };
    saveEmployeeRequest.send(JSON.stringify(employee));

    loadEmployeeList();
}

function deleteEmployee(employeeId) {
    console.log('Deletando empregado ' + employeeId);

    const result = confirm('Tem certeza que quer deletar o usuario de id ' + employeeId + '?');
    if (result) {
        const deleteRequest = new XMLHttpRequest();
        deleteRequest.open('DELETE', 'http://rest-api-employees.jmborges.site/api/v1/delete/' + employeeId, true);
        deleteRequest.onload = function (e) {
            console.log('Empregado ' + employeeId + ' deletado');

            loadEmployeeList();
        };
        deleteRequest.send();
    }
}


function getEmployee(employeeId) {
    console.log('Buscando empregado ' + employeeId);

    const getEmployeeRequest = new XMLHttpRequest();
    getEmployeeRequest.open('GET', 'http://rest-api-employees.jmborges.site/api/v1/employee/' + employeeId, true);
    getEmployeeRequest.onload = function (e) {
        console.log('Empregado ' + employeeId + ' buscado');

        const response = e.target.response;
        const employee = JSON.parse(response).data;
        $(nameTextInputId).val(employee.employee_name);
        $(salaryNumberInputId).val(employee.employee_salary);
        $(ageNumberInputId).val(employee.employee_age);
        $(avatarTextInputId).val(employee.profile_image);

        currentEditId = employee.id;

        editMode();
    };
    getEmployeeRequest.send();
}

function getEmployeeInfo() {
    const name = $(nameTextInputId).val();
    const age = $(ageNumberInputId).val();
    const salary = $(salaryNumberInputId).val();
    const avatar = $(avatarTextInputId).val();

    const employee = {
        name: name,
        age: age,
        salary: salary,
        profileImage: avatar
    };

    return employee;
}

function editMode() {
    $(createButtonId).css('display', 'none');
    $(saveButtonId).css('display', 'inline-block');
}

function createMode() {
    $(createButtonId).css('display', 'inline-block');
    $(saveButtonId).css('display', 'none');

    currentEditId = undefined;
}