-- Create Table 
CREATE TABLE Accounts(
    AccountId NUMBER PRIMARY KEY,
    AccountHolderName VARCHAR2(100),
    AccountType VARCHAR2(20),
    Balance NUMBER
);

-- Insert Values
INSERT INTO Accounts(AccountId,AccountHolderName,AccountType,Balance)
VALUES(1, 'Chaitu', 'SAVINGS', 5000);

INSERT INTO Accounts(AccountId,AccountHolderName,AccountType,Balance)
VALUES(2, 'Kishore', 'SAVINGS', 3000);

INSERT INTO Accounts(AccountId,AccountHolderName,AccountType,Balance)
VALUES(3, 'Dolly', 'CURRENT', 7000);

COMMIT;

SET SERVEROUTPUT ON;

-- Procedure
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
    v_rows_updated NUMBER;
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'SAVINGS';

    v_rows_updated := SQL%ROWCOUNT;

    DBMS_OUTPUT.PUT_LINE(
        v_rows_updated || ' savings account(s) updated with 1% interest.'
    );

    COMMIT;
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/