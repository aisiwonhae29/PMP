# a06: DML: Data Manipulation Language

# Insert

insert into [table] set [[col1 = val1], [col2 = val2], ...];
insert into [table (col1, col2, ...)] values [ (val1, val2, ...) ];

# Create

CREATE TABLE test(
    user_id INT auto_increment PRIMARY key,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);