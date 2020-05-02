select 
    p.FirstName,
    p.LastName,
    a.City,
    a.State
from
person p
left join address a using (personId)