-- 删除数据库 
drop database egg;

-- 创建数据库 
create database  egg;

--创建表
use egg;
create table user(
  id int(10) not nll auto_increment,
  name varchar(20) not null default 'admin' comment '用户名',
  pwd varchar(50) not null comment '密码',
  primary key(id)
)engine=InnoDB charset=utf8;
-- 查看 表 
show tables;

-- 查看表结构 
desc user;
-- 删除表 
drop table user;

--插入表数据 

insert into user values(1, 'user5', 123)
insert into user(name, pwd) values( 'user5', 123)

--查询表数据
select  * from user;
select id , name from user;
select id , name from user where id = 1;


-- 修改 表数据
update user set pwd = '123456' where id = 1;

--删除  表数据 
delete from user where id= 2;



