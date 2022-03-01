--   1) Clone data from the Shippers table to the NewShippers table.
CREATE TABLE NewShippers SELECT * FROM Shippers;

--   2) Get the list of suppliers which are related to each product name which has price greater than or equal 15$.
--   ( Which information about supplier will be present in result set is optional)
select s.CompanyName, p.ProductName, p.UnitPrice
from products p
inner join suppliers s on s.SupplierID = p.SupplierID
where p.UnitPrice > 15.000
order by p.UnitPrice desc

--   3) Get the list of total quantities of ordered products which consists of: 
--   total quantity ordered in Germany and the total quantity of products ordered in Sweden. (Result should contain 2 rows)
select o.ShipCountry as country, sum(od.quantity) as totalQuantity
from orders o
inner join `order details` od on o.OrderID = od.OrderID
where ShipCountry in ('Sweden', 'Germany')
group by o.shipCountry

--   4) Find the list of different countries in Employees and Customers tables.
with a as (
select country from customers
where country is not null
union all
select country from employees
where country is not null )

select distinct country from a

--   5) Find the list of the same Postal Codes between Suppliers and Customers tables.
select s.PostalCode
from suppliers s
inner join customers c on s.PostalCode = c.PostalCode

-- select postalcode from suppliers where postalcode in (select postalcode from customers)

--   6) Find the top Region, City and Country from which sales specialists were hired (means who sold the biggest quantity of products).
select e.Region, e.City, e.Country, sum(od.quantity) as quantity
from employees e
inner join orders o on e.EmployeeID = o.EmployeeID
inner join `order details` od on o.OrderID = od.OrderID
group by e.Region, e.City, e.Country
order by quantity desc
limit 1

--   7) Get two lists of products: with a price < 50.00 with a discountinued flag and < 50  without a discountinued flag.
--   8) Create new table NewProducts based on the Products table with only discountinued products. Compare data sets between Products and NewProducts tables. 
--   (Check that only discountinued products are inserted).

-- The 9th query is optional 
--  * Get the list of orders, where a required date is bigger than the Shipped date ( compare in days) and Ship Region is not specified.
datadiff