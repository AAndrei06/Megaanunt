const topBarId = document.querySelector(".input-search-cls");
const bannerResults = document.querySelector(".search-results-banner");
const searchBtn = document.getElementById(".btn-search");

function showResultsSearch(){
    if (topBarId.value == ""){
        bannerResults.innerHTML = "";
        bannerResults.style.display = "none";
    }else{
        bannerResults.innerHTML = "";
        bannerResults.style.display = "inline-block";
        adsDb.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().title.startsWith(topBarId.value)){
                    let redirectLink = "";
                    if(window.location.pathname.startsWith("/pages")){
                        redirectLink = `product_detail.html?id=${doc.id}`;
                    }else{
                        redirectLink = `/pages/product_detail.html?id=${doc.id}`;
                    }
                    bannerResults.innerHTML +=
                                        `<a href = "${redirectLink}">
                                            <div class="search-result-banner">
                                                <p>${doc.data().title.slice(0,16)}</p>
                                            </div>
                                        </a>`;
                }
            });
        });
    }
}

topBarId.addEventListener("click",showResultsSearch);
topBarId.addEventListener("keypress",(event) => {
    if (event.code == "Enter"){
        showResultsSearch();
    }
});
