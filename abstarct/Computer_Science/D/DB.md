# DB

### connection principle

- node.js connect to database drivers such as Mysql, PostgreSQL... 
- Import the Database Drivers
- Configuring the Connection
- Creating a Connection Pool
- establishing the Connection
- Executing Queries
- error handling
- Closing the Connection.

### cmd

\# case: node.js

```
async function queryTransaction(sq, params){
  const connection = await db.getConnection();
  await connection.beginTransaction();

  try{
    let result = await connection.query(sql, params);
    console.log('sql ==> ', sql);
    if(result.affectedRows<=0>){
        throw new Error('SQL Invalid);
    }

    await connection.commit();
    return success_msg;
  }catch(e){
    await connection.rollback();
    return err_msg;
  }finally{
    connection.release();
  }

}
```