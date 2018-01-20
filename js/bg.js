var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'left-right', // 'diagonal', 'top-bottom', 'radial', 'left-right'
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#005a99', '#0071c1'],
                ['#0071c1', '#22313F'],
                ['#0071c1', '#005a99']
            ],
            transitionSpeed: 7000

        }
    }
});