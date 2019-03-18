// 30 minutes max


function printStudents(students) {
	for(var i = 0; i < students.length; i++) {
		console.log("name: " + students[i]["name"] + ", Cohort: " + students[i]["cohort"])
	}
}

let studentList = [
	{name: 'Remy', cohort: 'Jan'},
	{name: 'Genevieve', cohort: 'March'},
	{name: 'Chuck', cohort: 'Jan'},
	{name: 'Osmund', cohort: 'June'},
	{name: 'Nikki', cohort: 'June'}
]

printStudents(studentList);

function printNames(users) {
	
	console.log("EMPLOYEES");

	for(var i = 0; i < users.employees.length; i++) {
		let numLetters = users.employees[i]['first_name'].length + users.employees[i]['last_name'].length
		console.log(users.employees[i]['first_name'] + ', ' + users.employees[i]['last_name'] + ' - ' + numLetters)
	}
}

let userList = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

printNames(userList);