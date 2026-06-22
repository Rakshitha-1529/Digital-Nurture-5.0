CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    DueDate DATE
);


INSERT INTO Loans (LoanID, CustomerID, DueDate) 
VALUES (1, 11, SYSDATE + 20);

INSERT INTO Loans (LoanID, CustomerID, DueDate) 
VALUES (2, 12, SYSDATE + 40);

INSERT INTO Loans (LoanID, CustomerID, DueDate) 
VALUES (3, 13, SYSDATE + 15);

INSERT INTO Loans (LoanID, CustomerID, DueDate) 
VALUES (4, 14, SYSDATE + 35);

INSERT INTO Loans (LoanID, CustomerID, DueDate) 
VALUES (5, 15, SYSDATE + 60);
COMMIT;





SET SERVEROUTPUT ON;


DECLARE
    CURSOR loan_cursor IS
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate <= SYSDATE + 30;
BEGIN
    FOR loan_rec IN loan_cursor LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' || loan_rec.LoanID || 
            ' for Customer ' || loan_rec.CustomerID || 
            ' is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY')
        );
    END LOOP;
END;
