const express = require('express');
const app = express();
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 3000

const staticweb = path.join(__dirname ,"../public")
const templete_path = path.join(__dirname , '../src/templete/views')
const partial_path = path.join(__dirname , '../src/templete/partial')

app.set('view engine' ,'hbs')
app.set('views' , templete_path )
hbs.registerPartials(partial_path)

app.use(express.static(staticweb))



app.get('/' , (req,res)=>{
    res.render('index')
})

app.get('/about' , (req,res)=>{
    res.render('about')
})

app.get('/weather' , (req,res)=>{
    res.render('weather')
})

app.get('*' , (req,res)=>{
    res.render('404error', {
        errorMsg : 'oops ! page is not found'
    })
})


app.listen(port ,()=> {
    console.log(`listening to port no. ${port}`);
})