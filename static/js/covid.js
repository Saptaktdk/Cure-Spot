var myform=document.getElementById('myForm')
myform.addEventListener('submit',function(e){
  e.preventDefault()
  var country=document.getElementById('country').value

  // var url= "https://api.covid19api.com/total/dayone/country/"+country
  var url= "https://coronavirus-19-api.herokuapp.com/countries/"+country

  fetch(url)
  .then((res)=>res.json())
  // .then((res)=>console.log(res))
.then((res)=>{
  
  var total_confirmed=document.getElementById('total_confirmed')
  var total_recovered=document.getElementById('total_recovered')
  var total_deaths=document.getElementById('total_deaths')

  var new_confirmed=document.getElementById('new_confirmed_today')
  var new_deaths=document.getElementById('new_deaths_today')
  var active_today=document.getElementById('active_today')

  total_confirmed.append(res.cases)
  total_recovered.append(res.recovered)
  total_deaths.append(res.deaths)

  new_confirmed.append(res.todayCases)
  new_deaths.append(res.todayDeaths)
  active_today.append(res.active)
})

});
