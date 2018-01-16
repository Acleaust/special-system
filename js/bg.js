var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#2574A9', '#4183D7'],
                ['#446CB3', '#22313F'],
                ['#34495E', '#3498DB']
            ],
            transitionSpeed: 7000

        }
    }
});

//['#2574A9', '#1E8BC3'],
//['#59ABE3', '#89C4F4'],
//['#E4F1FE', '#4183D7']