window.onload = function () {
    Particles.init ({
        selector: '.background',
        connectParticles: true,
        maxParticles: 200,
        responsive: [
            {
                breakpoint: 992,
                options: { maxParticles: 125 }
            },
            {
                breakpoint: 768,
                options: { maxParticles: 100 }
            },
            {
                breakpoint: 576,
                options: { maxParticles: 75 }
            }]
    })
    
};