const user_names = ["admin", "akif", "owais", "ali", "ameen"];

user_names.map((user)=>{
  if(user === "admin"){
    console.log(`Hello ${user}, would you like to see a status report?`);
  }
  else{
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
})
