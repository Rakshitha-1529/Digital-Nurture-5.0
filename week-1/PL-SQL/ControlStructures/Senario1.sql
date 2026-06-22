-- Create Customer Table
CREATE TABLE Customers(
    CustomerId NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Age NUMBER,
    IntrestRate NUMBER
);

-- Insert Customer Records
INSERT INTO Customers(CustomerId, Name, Age, IntrestRate)
VALUES(1,'Suresh',40,3);

INSERT INTO Customers(CustomerId, Name, Age, IntrestRate)
VALUES(2,'Ramesh',65,6);

INSERT INTO Customers(CustomerId, Name, Age, IntrestRate)
VALUES(3,'Sanju',57,3);

INSERT INTO Customers(CustomerId, Name, Age, IntrestRate)
VALUES(4,'Laxmi',78,5);

INSERT INTO Customers(CustomerId, Name, Age, IntrestRate)
VALUES(5,'Ritu',81,4);

COMMIT;


SET SERVEROUTPUT ON;

DECLARE
    CURSOR senior_citizens IS
        SELECT CustomerID, IntrestRate,Name 
        FROM Customers
        WHERE Age > 60;

    v_adjustedRate NUMBER;

BEGIN
    FOR cust_rec IN senior_citizens LOOP

        -- Apply 1% discount
        v_adjustedRate := cust_rec.IntrestRate - 1;

        UPDATE Customers
        SET IntrestRate = v_adjustedRate
        WHERE CustomerID = cust_rec.CustomerID;

        DBMS_OUTPUT.PUT_LINE(
    'CustomerID: ' || cust_rec.CustomerID ||
    ' | Name: ' || cust_rec.Name ||
    ' | New Interest Rate: ' || v_adjustedRate
);

    END LOOP;

    COMMIT;
END;
/