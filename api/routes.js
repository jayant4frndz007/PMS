const {SELECT,ADDUSER,GETDATA,DELETEDATA,FETCHDATAID}= require('./models/querySelector') ;
module.exports=(app)=>{
/*
    app.get('/',(req,res)=>{
        res.sendFile(__dirname+'/index.html');
      //res.send('Hello World')
    });
    
    app.get('/about',(req,res)=>{
        res.send('This is about Page')
      });

      app.get('/getId/:id',(req,res)=>{
        res.send('This is getId'+req.params.id);
      });
     */


    app.post('/login',async(req,res)=>{
    console.log(req.body.user);
    console.log(req.body.pass);
      try{
        let result=await SELECT(req.body.user,req.body.pass);
        res.json(result);
      }catch(err){
        console.log(err)
        res.sendStatus(500);
      }
      });

      app.post('/adduser',async(req,res)=>{
       
          try{
            let result=await ADDUSER(req.body.pname,req.body.pnation,req.body.page,req.body.pgender,req.body.pnum,req.body.pdob,req.body.pemail,req.body.padd);
           console.log('response',result);
            res.json(result);
          }catch(err){
            console.log(err)
            res.json(err);
          }
          });
          //getData

          app.get('/getData',async(req,res)=>{
       
            try{
              let result=await GETDATA();
             console.log('response',result);
              res.json(result);
            }catch(err){
              console.log(err)
              res.json(err);
            }
            });

            //deleteData

            app.post('/deleteData',async(req,res)=>{
         console.log('dlete ID:',req.body.id);
              try{
                let result=await DELETEDATA(req.body.id);
               console.log('response',result);
                res.json(result);
              }catch(err){
                console.log(err)
                res.json(err);
              }
              });
      //fetchDataId
      app.post('/fetchDataId',async(req,res)=>{
        console.log('dlete ID:',req.body.id);
             try{
               let result=await FETCHDATAID(req.body.id);
              console.log('response',result);
               res.json(result);
             }catch(err){
               console.log(err)
               res.json(err);
             }
             });
      
}
