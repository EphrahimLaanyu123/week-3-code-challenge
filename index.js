// fetch('http://localhost:3000/films/')
// .then(res => res.json())
// .then(data=>{
//     res = films[index]
//     ticketsSold = tickets_sold;
    
//     let movieDetails = '';
//     for(i=0;i<data.length;i++){
//         const film = data[i];
//         // var availabeTickets = capacity- tickets_sold
//         var{title, poster, runtime, capacity, showtime, tickets_sold, description} = film
//         // var availabeTickets = capacity- tickets_sold

//         movieDetails += `
//          <div id="myDiv">
//           <h1>${title}</h1>
//           <img src="${poster}" alt="${title}" ></img>
//           <p>Runtime: ${res.runtime}</p>
          
//           <p>Showtime: ${res.showtime}</p>
//           <p>Available Tickets: ${res.availabeTickets}</p>
//           <p>Description: ${res.description}</p>
//           <button type="button" class="buyTicket">Buy Ticket</button>
          
         
         
         
//          </div>
        
        
        
        
        
        
//         ` 
//         const buyTicket = document.querySelector('button');
//         console.log(buyTicket);
//         let availabeTickets = document.querySelector('.availableTickets')
//         buyTicket.addEventListener('click',()=>{
//             console.log('clicked')
//             let number = parseInt(availabeTickets.textContent)
//             if(number === 1){
//                 const tickets = document.querySelector('.tickets');
//                 tickets.textContent = 'SOLD OUT'
//             }
//             number -=1
//             availabeTickets.textContent = number
//         })
        

        
        



//     const movieContainer = document.getElementById("movieDetails");
//     movieContainer.innerHTML = movieDetails; 









//     }
// })

fetch('http://localhost:3000/films/')
  .then(res => res.json())
  .then(data => {
    let movieDetails = '';
    for (i = 0; i < data.length; i++) {
      const film = data[i];
      var { title, poster, runtime, capacity, showtime, tickets_sold, description } = film;
      var availableTickets = capacity - tickets_sold;



      movieDetails += `
        <div id="${movieContainerId}" class="${movieContainerClass}">
          <h1>${title}</h1>
          <img src="${poster}" alt="${title}">
          <p>Runtime: ${runtime}</p>
          <p>Showtime: ${showtime}</p>
          <p>Available Tickets: ${availableTickets}</p>
          <p>Description: ${description}</p>
          <button class="ticketButton">Buy Tickets</button>
        </div>
      `;
    }

    const movieContainer = document.getElementById("movieDetails");
    movieContainer.innerHTML = movieDetails;
  })
  .catch(error => {
    console.log("Error:", error);
  });


