// call function 
fetchtrending()
fetchbest()
appendul()

let rowt = document.getElementById('rowtrending')
let rowb = document.getElementById('rowbest')
let rowmodal = document.getElementById('rowm')
let myull = document.getElementById('myul1')
let modaltitle = document.getElementById('exampleModalLongTitle')



let contentmodal = ''
let bestcontent
let trendingcontent
let stars
let hot

/////////////////////////// appending the best card ////////////////////////////
function fetchbest() {
    $.ajax({
        url: '/json/newjson.json',
        // url: 'http://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function (res) {
            // console.log(res)
            // let article = JSON.parse(this.response)
            appendbest(res, 0, 3)
            // appendphoto(res)
        },
        error: function (er) {
            console.log(er)
        }
    })
}

// function appendbest(data) {
//     bestcontent = ''
//     for (a of data) {
//         // console.log(a)
//         if (a.best == 1) {
//             bestcontent += `
//             <div class="col-12 col-md-6 col-lg-4 col-xl-4">
//                 <div class="card card-cascade wider cardpadding">

//                  <!-- Card image -->
//                     <div class="view view-cascade overlay">
//                         <img class="card-img-top" src="${a.image}" alt="Card image cap">
//                         <a onclick='showmodal(this)' data-id=${a.id}>
//                         <div class="mask rgba-white-slight"></div>
//                          </a>
//                     </div>

//                 <!-- Card content -->
//                     <div class="card-body card-body-cascade text-center pb-0">

//                    <!-- Title -->
//                      <h4 class="card-title"><strong>${a.title}</strong></h4>
//                     <!-- Subtitle -->
//                     <h5 class="text-danger">${a.price}</h5>
//                     <!-- Text -->
//                     <p class="card-text">${a.Cdescription}</p>
//                 </div>
//                  </div>
//             </div>
//             `
//         }
//     }
//     rowb.innerHTML = bestcontent
// }

///////////////////// appending the trending card //////////////////
function fetchtrending() {
    $.ajax({
        url: '/json/newjson.json',
        // data: {limit : 6 , order: 'desc'},
        // url: 'http://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function (res) {
            // console.log(res)
            // let article = JSON.parse(this.response)
            appendtrending(res, 0, 6)
            // appendphoto(res)
        },
        error: function (er) {
            console.log(er)
        }
    })
}


function appendbest(data, start, end) {
    bestcontent = ''
    let n = 0
    stars = ''
    hot = ''
    for (a of data) {
        // console.log(a)
        if (a.best == 1) {
            n++
            if (n > start & n <= end) {

                for (var i = 0; i < a.rate; i++) {
                    stars += `<i class="fas fa-star"></i>`
                }

                if (a.trending == 1) {
                    hot += `<i class="fab fa-hotjar text-danger"></i>`
                }

                bestcontent += `
                <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                    <div class="card card-cascade wider cardpadding">
    
                     <!-- Card image -->
                        <div class="view view-cascade overlay">
                            <img class="card-img-top" src="${a.image}" alt="Card image cap">
                            <a onclick='showmodal(this)' data-id=${a.id}>
                            <div class="mask rgba-white-slight"></div>
                             </a>
                        </div>
    
                    <!-- Card content -->
                        <div class="card-body card-body-cascade text-center pb-0">
    
                       <!-- Title -->
                         <h4 class="card-title"><strong>${a.title}</strong></h4>
                        <!-- Subtitle -->
                        <h5 class="text-warning"><strong>${stars} ${a.price} ${hot}</strong></h5>
                        <!-- Text -->
                        <p class="card-text">${a.Cdescription}</p>
                    </div>
                     </div>
                </div>
                `
            }
            stars = ''
            hot = ''
        }
    }
    rowb.innerHTML = bestcontent
}


function appendtrending(data, start, end) {
    trendingcontent = ''
    let n = 0
    stars = ''
    hot = ''
    for (a of data) {
        // console.log(a)
        if (a.trending == 1) {
            n++
            if (n > start & n <= end) {

                for (var i = 0; i < a.rate; i++) {
                    stars += `<i class="fas fa-star"></i>`
                }

                if (a.trending == 1) {
                    hot += `<i class="fab fa-hotjar text-danger"></i>`
                }

                trendingcontent += `
                <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                    <div class="card card-cascade wider cardpadding">
    
                     <!-- Card image -->
                        <div class="view view-cascade overlay">
                            <img class="card-img-top" src="${a.image}" alt="Card image cap">
                            <a onclick='showmodal(this)' data-id=${a.id}>
                            <div class="mask rgba-white-slight"></div>
                             </a>
                        </div>
    
                    <!-- Card content -->
                        <div class="card-body card-body-cascade text-center pb-0">
    
                       <!-- Title -->
                         <h4 class="card-title"><strong>${a.title}</strong></h4>
                        <!-- Subtitle -->
                        <h5 class="text-warning"><strong>${stars} ${a.price} ${hot}</strong></h5>
                        <!-- Text -->
                        <p class="card-text">${a.Cdescription}</p>
                    </div>
                     </div>
                </div>
                `
            }
            stars = ''
            hot = ''
        }
    }
    rowt.innerHTML = trendingcontent
}

//  show modal when click picture from card
function showmodal(modal) {

    let id = $(modal).attr('data-id')
    console.log(id)

    $.ajax({
        url: '/json/newjson.json',

        method: 'GET',
        success: function (res) {

            appendmodal(res, id)
            console.log(res)

        },
        error: function (er) {
            console.log(er)
            console.log("this id error")
        }
    })
}


function appendmodal(data, aid) {
    stars = ''
    hot = ''
    for (a of data) {
        if (aid == a.id) {

            for (var i = 0; i < a.rate; i++) {
                stars += `<i class="fas fa-star"></i>`
            }

            if (a.trending == 1) {
                hot += `<i class="fab fa-hotjar text-danger"></i>`
            }

            modaltitle.innerHTML = `
            <h5 class="text-danger" style = "text-transform:capitalize;"><strong>${a.category}</strong></h5>
            `

            contentmodal = `
    <!-- Jumbotron -->
    <div class="jumbotron p-0">

        <!-- Card image -->
        <div class="view overlay rounded-top">
            <img src="${a.image}" class="img-fluid"
                alt="Sample image">
            <a href="#">
                <div class="mask rgba-white-slight"></div>
            </a>
        </div>

        <!-- Card content -->
        <div class="card-body text-center mb-3">

            <!-- Title -->
            <h3 class="card-title h3 my-4"><strong>${a.title}</strong></h3>
            <h5 class="mybolder">${a.Cdescription}</h5>

            <!-- Text -->
            <p class="card-text py-2">Summary : ${a.Mdescription}</p>
            <h5 class="text-warning"><strong> ${stars} ${a.price} ${hot}</strong></h5>
            <!-- Button -->
            <a href="${a.link}" class="btn purple-gradient btn-rounded mb-4">Get on Amazon</a>

        </div>

    </div>
    <!-- Jumbotron -->
    `
        }
    }
    //  call modal and append content
    $('#exampleModalCenter').modal('show')
    rowmodal.innerHTML = contentmodal
}


function showadmin() {
    modaltitle.innerHTML = `
        <h5 class="text-danger" style = "text-transform:capitalize;"><strong>Admin Login</strong></h5>
    `

    contentmodal = `
    <div class="adminmdoalstyle">
        <!-- Default form login -->
        <div class="text-center border border-light p-5" action="" id="form">

            <p class="h4 mb-4">Sign in</p>
            <!-- Email -->

            <p ></p>
            <input type="text" id="usr" class="form-control mb-4" placeholder="Username">

            <!-- Password -->
            
            
            <input type="password" id="password" placeholder="Password
                 " class="form-control mb-4">
                 <p id="valii"></p>
            <!-- Sign in button -->
            <button class="btn btn-info btn-block my-4" id="btn" onclick="signinbtn()">Sign in</button>
        </div>
        <!-- Default form login -->
    </div>

`
$('#exampleModalCenter').modal('show')
    rowmodal.innerHTML = contentmodal
}




function signinbtn(){
    let usr = document.getElementById('usr');
    let password = document.getElementById('password');
    let btn = document.getElementById('btn')
    let validatee = document.getElementById('valii')
    // console.log(usr.value)
    // console.log(password.value)
    if(usr.value == "admin" && password.value=="admin123"){
        console.log("trueee")
            window.location.href = '/admin/html/admin.html'
     }else{
        validatee.innerHTML = "Username or Password is wrong"
        console.log("else")
     }
}




// this is append li

function appendul() {

    $.ajax({
        url: '/json/newjson.json',
        method: 'GET',
        success: function (res) {
            let jlenght = res.length

            countjsonTrending(res)
            countjsonbest(res)

        },
        error: function (er) {
            console.log(er)
        }
    })
}
function countjsonbest(data) {
    let n = 0
    for (a of data) {
        if (a.best == 1) {
            n++
        }
    }
    // console.log(n)
    appendulbyindex2(n)
}

// count n trending and  call appendulbyindex
function countjsonTrending(data) {
    let n = 0
    for (a of data) {
        if (a.trending == 1) {
            n++
        }
    }
    // console.log(n)
    appendulbyindex1(n)

}



//  append pagination
function appendulbyindex1(n) {
    let npagination = Math.ceil(n / 6);
    var i = 1
    for (i; i <= npagination; i++) {
        var ul = document.getElementById('myul1')
        var li = document.createElement('li')
        var a = document.createElement('a')
        a.appendChild(document.createTextNode(i))
        a.setAttribute("class", "page-link")
        a.setAttribute("onclick", "cardpg1(this)")
        a.setAttribute("index", i)
        li.appendChild(a)
        li.setAttribute("class", "page-item")
        ul.appendChild(li)
    }
}

function appendulbyindex2(n) {
    let npagination = Math.ceil(n / 3);
    var i = 1
    for (i; i <= npagination; i++) {
        var ul = document.getElementById('myul2')
        var li = document.createElement('li')
        var a = document.createElement('a')
        a.appendChild(document.createTextNode(i))
        a.setAttribute("class", "page-link")
        a.setAttribute("onclick", "cardpg2(this)")
        a.setAttribute("index", i)
        li.appendChild(a)
        li.setAttribute("class", "page-item")
        ul.appendChild(li)
    }
}

//  pagination event when click append othe card
function cardpg1(myindex) {
    let index = $(myindex).attr("index")
    console.log(index)
    let n = index * 6
    let startt = n - 6
    $.ajax({
        url: '/json/newjson.json',
        method: 'GET',
        success: function (res) {
            appendtrending(res, startt, n)
        },
        error: function (er) {
            console.log(er)
        }
    })

}
function cardpg2(myindex) {
    let index = $(myindex).attr("index")
    console.log(index)
    let n = index * 3
    let startt = n - 3
    $.ajax({
        url: '/json/newjson.json',
        method: 'GET',
        success: function (res) {
            appendbest(res, startt, n)
        },
        error: function (er) {
            console.log(er)
        }
    })

}