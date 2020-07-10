const connection = require('../config/connection');


module.exports={
    SELECT: async (user,pass)=>{
        console.log('Coming',connection.threadId);
     return new Promise((resolve,reject)=>{
            connection.query('SELECT * from login where username=? and password=?',[user,pass],  (error, results, fields)=> {
                if (error) {
                  return reject('Already Exist');
                }
                let res=''; 
                results.map((data)=>{
                      res=data.category
                })
                return resolve(res);
              });
          })
     },
     //Add(req.body.pname,req.body.pnation,req.body.page,req.body.pgender,req.body.pnum,req.body.pdob,req.body.pemail);
     ADDUSER: async (pname,pnation,page,pgender,pnum,pdob,pemail,padd)=>{
      console.log(pname,pnation,page,pgender,pnum,pdob,pemail);
   return new Promise((resolve,reject)=>{
    var values = [[pemail,pname,pdob,page,pgender,pnation,pnum,padd]]; 
          connection.query('Insert into patient_table (user_email,name,dob,age,gender,nationality,number,address) VALUES ?',[values],  (error, results, fields)=> {
              if (error) {
                return reject(error.sqlMessage);
              }
              return resolve('Success');
            });
        })
   }
,
   GETDATA: async ()=>{
     return new Promise((resolve,reject)=>{
      connection.query('select * from patient_table', (error, results, fields)=> {
        if (error) {
          return reject(error.sqlMessage);
        }
        return resolve(results);
      });
     })
   },
   DELETEDATA : async (id)=>{
    return new Promise((resolve,reject)=>{
     connection.query('delete from patient_table where id=?',[id], (error, results, fields)=> {
       if (error) {
         return reject(error.sqlMessage);
       }

       return resolve('Deleted Successfuly')

     });
    })
  },
  FETCHDATAID : async (id)=>{
    return new Promise((resolve,reject)=>{
     connection.query('select * from patient_table where id=?',[id], (error, results, fields)=> {
       if (error) {
         return reject(error.sqlMessage);
       }

       return resolve(results);

     });
    })
  }
}

  

/*
  connection.query('UPDATE  hello set name=? where name=?',['jay','hello'], function (error, results, fields) {
    if (error) {
      return console.log('error',error)
    }
    return console.log('The solution is: ', results);
  });
  
  connection.query('SELECT * from hello ', function (error, results, fields) {
    if (error) {
      return console.log('error',error)
    }
    return console.log('The solution is: ', results);
  });
  
  var post  = {name: 'Hello MySQL'};
  var values = [  
    ['A'],  
    ['B'],  
    ['C']  
    ];  
  connection.query("INSERT INTO hello (name) VALUES ?",[values] , function (error, results, fields) {
    if (error) {
      return console.log('error',error)
    }
    return console.log('The solution is: ', results);
  });
  
  connection.query('SELECT * from hello ', function (error, results, fields) {
    if (error) {
      return console.log('error',error)
    }
    return console.log('The solution is: ', results);
  });*/
  