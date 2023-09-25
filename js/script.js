// function selectElement(){
    const container = document.querySelector('#container');
    // const choose = document.getElementById("choose").value;
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/indian`);
    request.send();
    // console.log(choose);
    
    request.addEventListener('load', function() {
        const[data] = JSON.parse(this.responseText);
        // console.log(data.name.common);
        
        const htmlData = `
        <div class="container-fluid bg-black cont-height d-flex justify-content-center align-item-center ">
        <div class="row m-auto ">
          <div class="py-5 bg-light rounded">
            <div clas="py-1">
              <img src="${data.flags.png}" alt="india" class="m-auto d-block">
            </div>
            <div class="text-center">
              <h6 class="mb-0 mt-3">${data.name.common}</h6>
              <p>Capital: ${data.capital}</p>
            </div>
            <div class="row">
              <div class="col-4 text-center">
                <p class="mb-0">${data.region}</p>
                <h6>Region</h6>
              </div>
              <div class="col-4 text-center">
                <p class="mb-0">${data.population}</p>
                <h6>Population</h6>
              </div>
              <div class="col-4 text-center">
                <p class="mb-0">${data.demonyms.eng.f}</p>
                <h6>Demonym</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
        container.insertAdjacentHTML("afterbegin", htmlData);
    }
    )
// }
// selectElement(); 