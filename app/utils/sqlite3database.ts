import sqlite3 from 'sqlite3'

const database:any = new sqlite3.Database('./users.db',(err)=>{
    if(err){
        console.error('Connection error',err.message);
    }else{
        console.log('connected');
    }
})

database.serialize(()=>{
    database.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      email TEXT NOT NULL,
      password TEXT NOT NULL
    )
    `)
})

const createUser:any = (email:User,password:User):void =>{
    const insertQuery = `
    INSERT INTO users (username, password)
    VALUES (?, ?)
    `;

    database.run(insertQuery,[email,password],(err:any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log('user created');
        }
    })
}

const getUserByUsername:any = (email:User) => {
  const selectQuery = `
    SELECT * FROM users
    WHERE email = ?
  `;

  database.get(selectQuery, [email], (err:any, row:any) => {
    if (err) {
        console.error('Error fetching user:', err.message);
    } else {
        console.log(row);
    }
  });


}

module.exports = {
    createUser,
    getUserByUsername,
    database
};