-- 1) Update the Employees table, so it contains the HireDate values from 2017 till the current (2021) year.
update employees
set hiredate = DATE_ADD(hiredate, interval 27 year)

-- 2) Delete records from the Products table which weren't ordered. 
delete from Products 
where UnitsOnOrder = 0;
-- ??????? waha
-- 3) Get the list of data about employees: First Name, Last Name, Title, Hire Date who was hired this year (2021).
select e.FirstName, e.LastName, e.Title , e.HireDate

from employees e
where EXTRACT(YEAR FROM e.HireDate) = 2021

-- 4) Find quantity of employees in each department. Note: Departments is the same as a title in the Employees table 
select distinct e.title as department, count(e.title) as quantity
from employees e
group by department

-- 5) Get the list of suppliers, which are located in USA and have a specified region.
select *
from suppliers s
where s.Country = 'USA'
and s.Region is not null

-- 6) Get the amount of products that were delivered by each supplier (company), which have a discount from the Unit Price more than 10%. 
--    Where record are represented from the biggest to lowest discount.
select s.CompanyName, p.ProductName, sum(o.quantity) as amount
from products p
inner join `order details` o
	on p.ProductID = o.ProductID
	inner join suppliers s
	on s.SupplierID = p.SupplierID
	where o.discount > 0.1
group by s.CompanyName, p.productname
order by sum(o.quantity) desc

-- 7) Get the top five product categories with the list of the most buyable products in Germany.
select c.CategoryName, sum(o.quantity) as quantity
from products p
inner join categories c	on c.CategoryID = p.CategoryID
inner join `order details` o 	on o.ProductId = p.ProductID
inner join orders orde on orde.OrderID = o.OrderID
where orde.ShipCountry = 'Germany'
group by c.CategoryName
order by quantity desc
limit 5

-- 8) Get the First Name, Last Name and Title of Managers and their subordinates.
select e1.LastName as managerLastName, e1.FirstName as managerFirstName, e1.Title, e2.LastName as subordinateLastName, e2.FirstName as subordinatesFirstName, e2.Title as subordinateTitle
from employees e1
inner join employees e2 on e1.EmployeeID = e2.ReportsTo

-- 9) Get the Firts Name, Lastn Name, Title of Sales who has the least amount of orders. (Amount of sold products should be also in the result set).
select e.FirstName, e.LastName, e.Title, sum(od.quantity) as quantity
from employees e
inner join orders o on e.EmployeeID = o.EmployeeID
inner join `order details` od on o.OrderID = od.OrderID
group by e.EmployeeID
order by quantity
limit 1