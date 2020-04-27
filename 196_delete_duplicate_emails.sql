delete from person where Id in (
    select * from(
    select
        p.Id
    from person p
    left join (
        select min(Id) as Id, Email
        from person
        group by Email
    )a using (Id)
    where a.id is null
    )ooo
)