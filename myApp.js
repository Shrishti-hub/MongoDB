require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;


console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true });

//personSchema
const personSchema = new Schema({
  name : {type:String, required:true},
  age : Number,
  favoriteFoods : [String]
});

let Person = mongoose.model('Person',personSchema); //creating a model

//creating instance of person
let Practice = new Person({
  name : "Shrishti",
  age : 22,
  favoriteFoods : ["Coffee","Juice"]
});


const createAndSavePerson = (done) => {
  let me = new Person({
    name:"Shrishti",age:22,favoriteFoods : ["choleBhature"]
  })
  me.save((error,data)=>{
    if(error){
      console.log(error);
    }else{
      done(null, data);
    }
  })
  
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople,function(err,people){
    if(err){
      console.log(err);
    }else{
      done(null,people);
    }
  })
  
};

const findPeopleByName = (personName, done) => {
  Person.find({name : personName},function(err,people){
    if(err){
      console.log(err);
    }
    done(null,people);
  })
  
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods : food},function(error,data){
    if(error){
      console.log(error);
    }done(null,data);
  })
  
};

const findPersonById = (personId, done) => {
  Person.findById({_id : personId},function(err,data){
    if(err){
      console.log(err)
    }done(null , data);
  })
  
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById({_id : personId},function(err,data){
    if(err){
      console.log(err);
    }data.favoriteFoods.push(foodToAdd);
    data.save((err,datas)=>{
      if(err){
        console.log(err);
      }done(null,datas);
    })
    
  })

  
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name:personName},{age : ageToSet},{ new: true },function(err,result){
    if(err){
      console.log(err);
    } done(null ,data);
    
  })

 
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
