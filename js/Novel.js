fetcharticle()
appendul()


let contentmodal = ''
let content 
let rowmodal = document.getElementById('rowm')
let row = document.getElementById('row')     
let myull = document.getElementById('myul')
let modaltitle = document.getElementById('exampleModalLongTitle')
let stars 
let hot

function fetcharticle(){
    $.ajax({
        url: '/json/newjson.json',
        method: 'GET',
        success: function(res){
            // console.log(res)
            appendarticle(res,0,12)
        },
        error: function(er){
            console.log(er)
        }
    })
}

function appendarticle(data,start,end) {
    content = ''
    let n = 0
    stars = ''
    hot = ''
    for (a of data) {
        // console.log(a)
        if (a.category == 'novel') {
            n++
            if(n>start & n<=end){

                for(var i=0;i<a.rate;i++){
                    stars +=`<i class="fas fa-star"></i>`
                }

                if(a.trending == 1){
                    hot += `<i class="fab fa-hotjar text-danger"></i>`
                }

                content += `
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
    row.innerHTML = content
}

// this is append li
function appendul() {

    $.ajax({
        url: '/json/newjson.json',
        method: 'GET',
        success: function (res) {
            let jlenght = res.length
           
            countjson(res)

        },
        error: function (er) {
            console.log(er)
        }
    })
}

// count n trending and  call appendulbyindex
function countjson(data){
    let n = 0
    for(a of data){
        if(a.category == 'novel'){
            n++
        }
    }
    // console.log(n)
    appendulbyindex(n)
    
}

//  append pagination
function appendulbyindex(n) {
    let npagination = Math.ceil(n / 12);
    var i = 1
    for (i; i <= npagination; i++) {
        var ul = document.getElementById('myul')
        var li = document.createElement('li')
        var a = document.createElement('a')
        a.appendChild(document.createTextNode(i))
        a.setAttribute("class", "page-link")
        a.setAttribute("onclick","cardpg(this)")
        a.setAttribute("index",i)
        li.appendChild(a)
        li.setAttribute("class", "page-item")
        ul.appendChild(li)
    }
}

//  pagination event when click append othe card
function cardpg(myindex) {
    let index = $(myindex).attr("index")
    console.log(index)
    let n = index * 12
    let startt = n-12
    $.ajax({
        url: '/json/newjson.json',
        method: 'GET',
        success: function (res) {
          appendarticle(res,startt,n) 
        },
        error: function (er) {
            console.log(er)
        }
    })
    
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

            for(var i=0;i<a.rate;i++){
                stars +=`<i class="fas fa-star"></i>`
            }
          
            if(a.trending == 1){
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
            <a href="${a.link}" class="btn purple-gradient btn-rounded mb-4 btnpadding">Get on Amazon</a>

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