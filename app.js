
async function gifCreate(searched) {
    const gif = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searched,
      api_key: "mKKzDSfZ8YaRDhs5aelBpcNkPOK0pfyL"
        }
    });
    //console.log(gif.data.data[ranNum()].images.original.url);
    const img = document.createElement('img');
    img.src = gif.data.data[ranNum()].images.original.url;
    $("section").append($(img));
}

const ranNum = () => {
    return Math.floor(Math.random() * (50 - 1 + 1) + 1);
}


$("#gifform").on("submit", function(e) {
    e.preventDefault();
    const searched = $("#giftext").val();
    gifCreate(searched);
})

$("#deleteBtn").on("click", function() {
    $("section").empty();
})