// Declare your genre arrays here
let Terror = ["https://images.moviesanywhere.com/9def116287044c7659f17ec2a7c84381/80750a91-1d23-4498-bffc-d9a9eff570a1.jpg", "https://m.media-amazon.com/images/M/MV5BMDE5YjcyNDUtZWQ2YS00MzNiLWI2ZDItNDFkZWJiNjMzNDc1XkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_.jpg", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6252/6252365_so.jpg"];

let Comedy = ["https://static.wikia.nocookie.net/grownups/images/5/52/Grown_Ups_2.jpg/revision/latest/scale-to-width-down/1400?cb=20220327172101", "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51FPVA03bqL._AC_UF894,1000_QL80_.jpg", "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2006/8/w300/9SfvB8ZO2mpy5dhB2IetK3ygXdr.jpg"];

let Action = ["https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNzZhYmQ2NGMtZmRmYi00NzgzLTllNmUtNDQwZDAxMmE3NzI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/863E75A035911DBA10F8D7EE1E433A12A1BF4915670B66597AC31C585A291942/scale?width=1200&aspectRatio=1.78&format=jpeg"];



// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".movies");

// Submit Button 
let submitButton = document.querySelector(".button1");
submitButton.onclick = function() {
    let genreInput = document.querySelector(".input1").value;
    if (genreInput === "Terror") {
        for (let terrorMovie of Terror) {
            let img = "<img src =" + terrorMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (genreInput === "Action") {
        for (let actionMovie of Action) {
            let img = "<img src=" + actionMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (genreInput === "Comedy") {
        for (let comedyMovie of Comedy) {
            let img = "<img src=" + comedyMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    }

};
let suggestButton = document.querySelector(".button2");
suggestButton.onclick = function() {
    let suggestInput = document.querySelector(".input2").value;
    Terror.push(suggestInput);
    Comedy.push(suggestInput);
    Action.push(suggestInput);

    let img = "<img src=" + suggestInput + ">";
    result.insertAdjacentHTML("beforeend", img + "Thank you!");
};