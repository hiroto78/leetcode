select a.name as Employee
from employee a
left join employee b on (a.managerId = b.Id)
where a.salary > b.salary