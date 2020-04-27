select a.name as Customers
from customers a
left join(
select customerId from orders group by customerId
) b on a.Id = b.customerId
where b.customerId is null