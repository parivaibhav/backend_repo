;

create table user (
    id varchar(50) primary key,
    username varchar(50) UNIQUE,
    email varchar(50)UNIQUE not null,
    password varchar(50) not null
);