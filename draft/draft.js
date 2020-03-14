
//  this is from main.js

// function fetchtrending(){
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             let jsondata = JSON.parse(this.response)
//             console.log(jsondata)
//             appendtrending(jsondata)
//         }
//     }
//     xhr.open('GET', '/json/myjson.json', true)
//     xhr.send();
// }
// // use border-0
// let trendingcontent = ''
// function appendtrending(data){
//     for(a of data){
//         console.log(a)
//         if(a.trending == 1){
//             trendingcontent += `
//             <div class="col-12 col-md-6 col-lg-4 col-xl-4">
//             <div class="card cardpadding">
//             <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">
//             <div class="card-body">
//             <h4 class="card-title">
//                 <a>${a.title}</a>
//             </h4>
//             <p class="card-text">${a.description}</p>
//             <a href="#" class="btn btn-primary" onclick ="sss(this)">Button</a>

//         </div>

//     </div>
//     <!-- Card -->
// </div>
//             `
//         }
//     }
//     rowt.innerHTML = trendingcontent
// }

// function fetchbest(){
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             let jsondata = JSON.parse(this.response)
//             console.log(jsondata)
//             appendbest(jsondata)
//         }
//     }
//     xhr.open('GET', '/json/myjson.json', true)
//     xhr.send();
// }
// let bestcontent = ''
// function appendbest(data){
//     for(a of data){
//         console.log(a)
//         if(a.best == 1){
//             bestcontent += `
//             <div class="col-12 col-md-6 col-lg-4 col-xl-4">
//             <div class="card cardpadding">
//             <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">
//             <div class="card-body">
//             <h4 class="card-title">
//                 <a>${a.title}</a>
//             </h4>
//             <p class="card-text">${a.description}</p>
//             <a href="#" class="btn btn-primary" onclick ="sss(this)">Button</a>

//         </div>

//     </div>
//     <!-- Card -->
// </div>
//             `
//         }
//     }
//     rowb.innerHTML = bestcontent
// }