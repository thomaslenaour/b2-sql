const name = "thomas le naour"
const promo = "B2A"

const q1 = `
    SELECT name
    FROM Track 
    WHERE Milliseconds < (
        SELECT Milliseconds
        FROM Track
        WHERE  TrackId = 3457
    )
`

const q2 = `
    SELECT name 
    FROM Track
    WHERE MediaTypeId = (
        SELECT MediaTypeId
        FROM Track
        WHERE Name = ('Rehab')
    )
`

const q3 = `
    SELECT p.PlaylistId, p.Name, COUNT(pt.TrackId) "Nb-Tracks"
    FROM Playlist p
    JOIN PlaylistTrack pt
        ON p.PlaylistId = pt.PlaylistId
    GROUP BY p.PlaylistId, p.Name
`

const q4 = `
    SELECT (SUM(t.Milliseconds) / COUNT(t.Milliseconds)) AS moyenne, pt.PlaylistId
    FROM Chinook.dbo.Track t
    JOIN Chinook.dbo.PlaylistTrack pt
        ON t.TrackId = pt.TrackId
    GROUP BY pt.PlaylistId
    HAVING (SUM(t.Milliseconds) / COUNT(t.Milliseconds)) > (
        SELECT (SUM(Milliseconds) / COUNT(Milliseconds)) AS moyenne
        FROM Chinook.dbo.Track
    )
`

const q5 = `
    SELECT p.Name
    FROM Chinook.dbo.PlaylistTrack pt
    JOIN Chinook.dbo.Playlist p
        ON p.PlaylistId = pt.PlaylistId
    WHERE pt.PlaylistId IN (1, 13)
    GROUP BY p.Name
    HAVING COUNT(pt.TrackId) IN (
        SELECT COUNT(TrackId)
        FROM Chinook.dbo.PlaylistTrack
        WHERE PlaylistId IN (1, 13)
        GROUP BY PlaylistId
    )
`

const q6 = `
    SELECT c.FirstName, c.LastName
    FROM Chinook.dbo.Customer c
    JOIN Chinook.dbo.Invoice i
        ON i.CustomerId = c.CustomerId
    WHERE i.Total > (
        SELECT MAX(Total)
        FROM Chinook.dbo.Invoice
        WHERE BillingCountry = ('France')
    )
    AND i.BillingCountry != ('France');
`

const q7 = `
    SELECT BillingCountry, MIN(Total) "Min-Total", MAX(Total) "Max-Total", AVG(ALL Total) "Avg-Total", COUNT(Total) "Count-Total"
    FROM Chinook.dbo.Invoice
    GROUP BY BillingCountry
`

const q8 = `
    SELECT t.*, m.Name AS mediaName
    FROM Chinook.dbo.Track t
    JOIN Chinook.dbo.MediaType m 
        ON t.MediaTypeId = m.MediaTypeId
    WHERE UnitPrice > (
        SELECT (SUM(UnitPrice) / COUNT(UnitPrice)) AS prix_moyen
        FROM Chinook.dbo.Track
    )
`

const q9 = `

`

const q10 = `

`

const q11 = `

`

const q12 = `

`

const q13 = `

`

const q14 = `

`

const q15 = `

`

const q16 = `

`

const q17 = `

`

const q18 = `
    CREATE TABLE Group (
        [id] int NOT NULL,
        [name] varchar(255) NOT NULL,
        [display_name] varchar(255) NOT NULL,
        [description] varchar(255) NOT NULL
    ) ;
    
    CREATE TABLE Group_Role (
        [id] int NOT NULL,
        [group_id] int NOT NULL,
        [role_id] int NOT NULL
    ) ;
    
    
    CREATE TABLE Permission (
        [id] int NOT NULL,
        [name] varchar(255) NOT NULL,
        [display_name] varchar(255) NOT NULL,
        [description] varchar(255) NOT NULL
    ) ;
    
    CREATE TABLE Role (
        [id] int NOT NULL,
        [name] varchar(255) NOT NULL,
        [display_name] varchar(255) NOT NULL,
        [description] varchar(255) NOT NULL
    ) ;
    
    
    CREATE TABLE Role_Permission (
        [id] int NOT NULL,
        [role_id] int NOT NULL,
        [permission_id] int NOT NULL
    ) ;
    
    CREATE TABLE User (
        [id] int NOT NULL,
        [username] varchar(255) NOT NULL,
        [email] varchar(255) NOT NULL,
        [superuser] int NOT NULL
    ) ;
    
    CREATE TABLE User_Group (
        [id] int NOT NULL,
        [user_id] int NOT NULL,
        [group_id] int NOT NULL
    ) ;
    
    CREATE TABLE User_Role (
        [id] int NOT NULL,
        [user_id] int NOT NULL,
        [role_id] int NOT NULL
    ) ;
    
    ALTER TABLE [Group]
        ADD PRIMARY KEY ([id]);
    
    ALTER TABLE [Group_Role]
        ADD PRIMARY KEY ([id]);
    
    ALTER TABLE [Permission]
        ADD PRIMARY KEY ([id]);
    
    ALTER TABLE [Role]
        ADD PRIMARY KEY ([id]);
    
    ALTER TABLE [Role_Permission]
        ADD PRIMARY KEY ([id]);
    
    ALTER TABLE [User]
        ADD PRIMARY KEY ([id]);
    
    ALTER TABLE [User_Group]
        ADD PRIMARY KEY ([id]);
    
    ALTER TABLE [User_Role]
        ADD PRIMARY KEY ([id]);
    
    ALTER TABLE [Group]
        MODIFY [id] cast(11 as int) NOT NULL AUTO_INCREMENT;
    
    ALTER TABLE [Group_Role]
        MODIFY [id] cast(11 as int) NOT NULL AUTO_INCREMENT;
    
    ALTER TABLE [Permission]
        MODIFY [id] cast(11 as int) NOT NULL AUTO_INCREMENT;
    
    ALTER TABLE [Role]
        MODIFY [id] cast(11 as int) NOT NULL AUTO_INCREMENT;
    
    ALTER TABLE [Role_Permission]
        MODIFY [id] cast(11 as int) NOT NULL AUTO_INCREMENT;
    
    ALTER TABLE [User]
        MODIFY [id] cast(11 as int) NOT NULL AUTO_INCREMENT;
    
    ALTER TABLE [User_Group]
        MODIFY [id] cast(11 as int) NOT NULL AUTO_INCREMENT;
    
    ALTER TABLE [User_Role]
        MODIFY [id] cast(11 as int) NOT NULL AUTO_INCREMENT;
        
`

const q19 = `

`

const q20 = `

`

const q21 = `
DELETE FROM Invoice 
WHERE InvoiceDate LIKE '%2010%';
`

const q22 = `

`

const q23 = `

`

const q24 = `
    ALTER TABLE Employee
    ADD Salary int
`

const q25 = `

`

const q26 = `
    ALTER TABLE Invoice
    DROP BillingPostalCode
`

// NE PAS TOUCHER CETTE SECTION
const tp = {name: name, promo: promo, queries: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26]}
module.exports = tp
