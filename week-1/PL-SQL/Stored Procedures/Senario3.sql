-- Create Accounts Table
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


CREATE OR REPLACE PROCEDURE TransferFunds (p_source_account IN NUMBER,p_target_account IN NUMBER,p_amount IN NUMBER) IS
    v_source_balance NUMBER;
BEGIN
    SELECT Balance INTO v_source_balance
    FROM Accounts
    WHERE AccountID = p_source_account;

    IF v_source_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance.');
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance.');
    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_source_account;

    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_target_account;

    DBMS_OUTPUT.PUT_LINE('Transferred ₹' || p_amount || ' from Account ID ' || p_source_account || ' to Account ID ' || p_target_account || '.');

    COMMIT;
END;
/

BEGIN
    TransferFunds(1, 2, 1000); 
    TransferFunds(1,3,20000);
END;
/