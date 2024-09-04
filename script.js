

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.phase-btn');
    const dataBlocks = document.querySelectorAll('.phase-data');

   
    const phaseData = {
        'phase-1': {
            target: '98,50,994',
            registered: '1,09,31,707',
            sanctioned: '98,46,902',
            completed: '96,41,521',
            funds: '1,17,014.27 Cr.'
        },
        'phase-2': {
            target: '78,25,123',
            registered: '1,23,45,678',
            sanctioned: '89,67,543',
            completed: '87,54,321',
            funds: '89,456.78 Cr.'
        },
        'cumulative': {
            target: '1,76,76,117',
            registered: '2,32,77,385',
            sanctioned: '1,88,14,445',
            completed: '1,83,95,842',
            funds: '2,06,471.05 Cr.'
        },
        'year-wise': {
            target: '52,34,789',
            registered: '67,89,012',
            sanctioned: '45,67,890',
            completed: '56,78,901',
            funds: '72,345.67 Cr.'
        }
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            buttons.forEach(btn => btn.classList.remove('active'));

            
            button.classList.add('active');

            const phase = button.getAttribute('data-phase');
            dataBlocks.forEach(block => {
                if (block.id === phase) {
                    block.style.display = 'flex';
                    updateDataBlocks(phase);
                } else {
                    block.style.display = 'none';
                }
            });
        });
    });

    function updateDataBlocks(phase) {
        document.getElementById(`target-${phase}`).innerText = phaseData[phase].target;
        document.getElementById(`registered-${phase}`).innerText = phaseData[phase].registered;
        document.getElementById(`sanctioned-${phase}`).innerText = phaseData[phase].sanctioned;
        document.getElementById(`completed-${phase}`).innerText = phaseData[phase].completed;
        document.getElementById(`funds-${phase}`).innerText = phaseData[phase].funds;
    }

    
    updateDataBlocks('cumulative');
    document.querySelector('.phase-btn[data-phase="cumulative"]').classList.add('active');
    document.getElementById('cumulative').style.display = 'flex';
});


// ---------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', (event) => {
//     const video = document.getElementById('video');
//     const playPauseButton = document.getElementById('play-pause');

//     playPauseButton.addEventListener('click', () => {
//         if (video.paused) {
//             video.play();
//             playPauseButton.textContent = 'Pause';
//         } else {
//             video.pause();
//             playPauseButton.textContent = 'Play';
//         }
//     });

//     video.addEventListener('play', () => {
//         playPauseButton.textContent = 'Pause';
//     });

//     video.addEventListener('pause', () => {
//         playPauseButton.textContent = 'Play';
//     });
// });





// ----------------------------------------------------------/


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); 
}

function plusSlides(n) {
  slideIndex += n - 1; 
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1; 
  showSlides();
}


// --------------------------------------------------------------------------

function showSanctioned() {
    document.getElementById('mapTitle').innerText = 'Houses Sanctioned';
    document.getElementById('mapIframe').src = 'https://app.powerbi.com/view?r=YOUR_EMBED_URL_1';
    document.getElementById('sanctionedBtn').classList.add('active');
    document.getElementById('completedBtn').classList.remove('active');
}
function showCompleted() {
    document.getElementById('mapTitle').innerText = 'Houses Completed';
    document.getElementById('mapIframe').src = 'https://app.powerbi.com/view?r=YOUR_EMBED_URL_2';
    document.getElementById('completedBtn').classList.add('active');
    document.getElementById('sanctionedBtn').classList.remove('active');
}