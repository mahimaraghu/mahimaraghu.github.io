let species;

function getSpecies() {
    let s = document.querySelector('#search1');
    if (s.value) {
        $('.container').addClass('active');
        const results = species.filter(i => i.species.toLowerCase().includes(s.value.toLowerCase()));
        updateUi(results)
    } else {
        document.querySelector(".resultbox").innerHTML = `<h3>No Results Found...</h3>`;
        $('.container').removeClass('active');
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
                    <div class="card-header">${i.species}</div>
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