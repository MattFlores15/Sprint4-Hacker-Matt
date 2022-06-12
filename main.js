import './style.css'
import * as firebase from './src/firebase.js';



const app = document.querySelector("#app") 
const table = document.querySelector("#ex-table")
// let isSortAsc = false

//////////////API//////////////////

// const students = []



Promise.resolve(firebase.getStudents()).then((values) => {
  // app.innerHTML+=values; 
  // console.log(values);

const students = values

sortDesc()
// isSortAsc = !isSortAsc;

document.getElementById("desc").addEventListener("click", () => {
  students.reverse()
  renderTable(students)
});

function sortDesc(){
students.sort((s1, s2)=> s1.points >= s2.points).reverse()
// isSortAsc = false
}
renderTable(students)
// document.getElementById("asce").addEventListener("click", () => {
//   students.reverse()
//   renderTable(students)
// });


// function sortAsc(){
// students.sort((s2, s1)=> s2.index >= s1.index)
// renderTable(students)
// }




  function renderTable(students){

    table.innerHTML= `<thead class="thead-inverse">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th><i class="fa-solid fa-sort"></i> Points</th>
              <th>Delete</th>
            </tr>
          </thead>`;
    
    const tbody = document.createElement('tbody')

  
    function productDelete(table) {
        table.parents("tr").remove();
    }


    for(let index in students){
      // app.innerHTML+= values[index].name
      const row = document.createElement('tr')
      const rank = document.createElement('td')
      rank.innerText = index
      const name = document.createElement('td')
      name.innerText = values[index].name
      const points = document.createElement('td')
      points.innerText = values[index].points
      const del = document.createElement('td')
      del.innerHTML = "<button type='button' id='delete' @click='productDelete(this)' class='btn btn-default'>" + "<i class='fa-solid fa-delete-left'></i>" + "</button>"
      del.addEventListener("click", () => {
      productDelete(this)
      });
      row.appendChild(rank)
      row.appendChild(name)
      row.appendChild(points)
      row.appendChild(del)
      tbody.appendChild(row)

      
    }
    table.appendChild(tbody)

  }



    let nameInput = document.querySelector("#name").value;
    let pointsInput = document.querySelector("#points").value;

    console.log(nameInput,pointsInput);

    if (nameInput !== "" && pointsInput !== "") {
      firebase.writeUserData(nameInput, pointsInput);
    }



  nameInput.value = ""
  pointsInput.value = ""

  
  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", () => {
  firebase.writeUserData; 
  // window.location.href = window.location.href;
  });

});









 


// console.log(students);

// console.log(typeof students)

  //   students.forEach(element => {
  //   console.log(element)
  //   app.innerHTML+= element;
  // });


// console.log( document.getElementById("app"))

// renderPage()
// firebase.writeUserData()

// var database = ;

// database.once('value', function(snapshot){
//     if(snapshot.exists()){
//         var content = '';

        // students.forEach(function(data){
        //     var Name = data.val().name;
        //     var Points= data.val().points;
        //     content += '<tr>';
        //     content += '<td>' + Name + '</td>'; //column1
        //     content += '<td>' + Points + '</td>';//column2
        //     content += '</tr>';
        // });

        // ('#ex-table').append(content);
//     }
// });

