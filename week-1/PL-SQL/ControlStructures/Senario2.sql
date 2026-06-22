CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);
/

INSERT INTO Customers (CustomerID, Name, Balance, IsVIP)
VALUES (1, 'Arjun', 8000, NULL);

INSERT INTO Customers (CustomerID, Name, Balance, IsVIP) 
VALUES (2, 'Bobby', 13000, NULL);

INSERT INTO Customers (CustomerID, Name, Balance, IsVIP) 
VALUES (3, 'Chakri', 6000, NULL);

INSERT INTO Customers (CustomerID, Name, Balance, IsVIP) 
VALUES (4, 'Dora', 17000, NULL);

INSERT INTO Customers (CustomerID, Name, Balance, IsVIP) 
VALUES (5, 'Mickey', 11000, NULL);

COMMIT;
/

SET SERVEROUTPUT ON;

DECLARE
    CURSOR balance_cursor IS
        SELECT CustomerID, Name 
        FROM Customers
        WHERE Balance > 10000;
BEGIN
    FOR bal_rec IN balance_cursor LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = bal_rec.CustomerID;

        DBMS_OUTPUT.PUT_LINE('CustomerID ' || bal_rec.CustomerID || ' ' || bal_rec.Name || ' marked as VIP');
    END LOOP;

    COMMIT;
END;
/