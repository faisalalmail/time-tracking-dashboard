let tdata;
const report = document.getElementById("report");
let frequency;
let freq;
let cleaned;

function callDaily(){
    report.innerHTML = "";
    frequency='daily';
    freq = 'yesterday - ';
    dataarrived();
}

function callWeekly(){
    report.innerHTML = "";
    frequency='weekly';
    freq = 'Last Week - ';
    dataarrived();
}

function callMonthly(){
    report.innerHTML = "";
    frequency='monthly';
    freq = 'Last Month - ';
    dataarrived();
}




fetch('/data.json').then((response) => {  
  if(!response.ok) return console.log('Oops! Something went wrong.');
  
  return response.json();
}).then((data) => {
  tdata=data;
  callDaily();
});

function dataarrived(){
  

/* mytext.textContent = tdata; */

tdata.forEach((item) => 
    
    {
/* mytext.textContent = 'title'; */

/* card start */
const newCard = document.createElement('div');
newCard.classList.add('activity');
/* card head */
const cardHead = document.createElement('div');
cleaned = item['title'].replace(/\s+/g, '-');
cardHead.classList.add('activity-image', cleaned);

/* details card */
const detailsCard = document.createElement('div');
detailsCard.classList.add("details-card");

/*details*/
const details = document.createElement('div');
details.classList.add("details");

/* top row */
const topRow = document.createElement('div');
topRow.classList.add("top-row");

/*activity name*/
const activityName = document.createElement('div');
activityName.classList.add("activity-name","tp5m");
activityName.textContent = item['title'];

/*more details*/
const moreDetails = document.createElement('div');
moreDetails.classList.add("more-details","right");
const moreDetailsImg = document.createElement('img');
moreDetailsImg.src = 'images/icon-ellipsis.svg'
moreDetailsImg.alt = "More details"
moreDetails.appendChild(moreDetailsImg);
/* top row end */

/* bottom row */
const bottomRow = document.createElement('div');
    bottomRow.classList.add("bottom-row");

/* current */
const currentTime = document.createElement('div');
    currentTime.classList.add("tp3");
    currentTime.textContent = item.timeframes[frequency].current+'hrs';

/* previous */
const previousTime = document.createElement('div');
    previousTime.classList.add("tp6","right","align-bottom");
    previousTime.textContent = [freq]+ item.timeframes[frequency].previous+'hrs';

/* newCard.textContent = item['title']; */
report.appendChild(newCard);
newCard.appendChild(cardHead);
newCard.appendChild(detailsCard);
detailsCard.appendChild(topRow);
topRow.appendChild(activityName);
topRow.appendChild(moreDetails);
detailsCard.appendChild(bottomRow);
 bottomRow.appendChild(currentTime);
 bottomRow.appendChild(previousTime);
 
 

    });



}

