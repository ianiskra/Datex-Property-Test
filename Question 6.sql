-- Question 6a
-- Test: Write a SQL query that returns all columns of the subset of rows, where each row represents the most recent “StartDate” for each “Role”

SELECT  Role, MAX(startDate) AS ‘Most Recent Start Date’ FROM users  GROUP BY Role;