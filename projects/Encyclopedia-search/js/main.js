let species;

function getSpecies(e) {
    e.preventDefault();
    let s = document.querySelector('#search1');
    if (s.value) {
        $('.container-fluid').addClass('active');
        const results = species.filter(i => i.species.toLowerCase().includes(s.value.toLowerCase()));
        document.querySelector(".rescount").innerHTML = `<h3>(${results.length} Results Found)</h3>`;

        updateUi(results)
    } else {
        document.querySelector(".resultbox").innerHTML = `<h3>No Results Found...</h3>`;
        document.querySelector(".rescount").innerHTML = ``;

        $('.container-fluid').removeClass('active');
    }
}
// array
$.ajax({
    url: "data/encyclopedia.json",
    method: "GET",
    success: function(res) {
        console.log(res);
        species = res
    }

})

function updateUi(r) {
    let rb = "";
    if (r.length > 0) {
        for (let i of r) {
            rb += `<div class="card" style="width:320px">
                    <figure class="card-img-top">
                    <img src="${i.image}" alt="${i.species}">
                    </figure>
                    <div class="card-header"><strong>${i.species}</strong></div>
                    <div class="card-body">
                    <p>Class: ${i.class}</p>
                    <p>Mostly Found in Region: ${i.region}</p>
                    </div>
                    </div>`
        }
    }
    if (rb) {
        document.querySelector(".resultbox").innerHTML = rb;
    }



}