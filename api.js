let endpointgetdata = "https://reqres.in/api/users";
let konten = document.getElementById('products');
const dataUser = fetch(endpointgetdata).then((data) => data.json())
                   .then((response) => {
                    console.log(response.data);
                    const data = response.data;
                    console.log(data);
                    // data.forEach(element => {
                    //     konten.innerHTML += `<div class="card" style="width: 18rem;">
                    //     <img src="${element.avatar}" class="card-img-top" alt="...">
                    //     <div class="card-body">
                    //       <h5 class="card-title">${element.first_nama} ${element.last_name}</h5>
                    //       <p class="card-text">${element.email}.</p>
                    //       <a href="#" class="btn btn-primary">Go somewhere</a>
                    //     </div>
                    //   </div>`;
                    // });
                   for (let index = 0; index < data.length; index ++) {
                    konten.innerHTML += `<div class="card" style="width: 18rem;">
                         <img src="${data[index].avatar}" class="card-img-top" alt="...">
                         <div class="card-body">
                           <h5 class="card-title">${data[index].first_name}</h5>
                           <p class="card-text">${data[index].email}</p>
                           <a href="#" class="btn btn-primary">Go somewhere</a>
                         </div>
                       </div>`
                   }
                })
