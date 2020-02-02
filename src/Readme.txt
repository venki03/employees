Information about the Project GIC:

In this project we three pages:
1) Employee list page    Url: http://localhost:3000/#/employee_list

2) Employee Create Page  Url: http://localhost:3000/#/employee_list/create

3) Employee Edit pages	 Url: http://localhost:3000/#/employee_list/1

In the edit url number 1 denotes---> its id number of employee.


We have tag folder it contains
		
		index.js-->    Index page for showing list of employee.
		
		TagCraete.js--> This page for add new employee to the list.
		
		TagEdit.js-->  This page for editing the existing employee list
		
		TagList.js--> This page for routing all pages and listing the employees.


we have two js files data and dataprovider.
		
		In the data.js file we have employee list information in json formate from there we are reading the file.
		
		In the dataprovider.js file we are talking the data from data.js file and provide the data into index.js file for listing information to TagList.