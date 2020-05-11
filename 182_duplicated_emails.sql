select email as Email from(
  select email, count(*) as count from person group by email
)a
where count > 1