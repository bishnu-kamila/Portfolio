export const fadeIn = (direction, delay) => {
    return{
        hidden : {
            y: direction === 'up' ?  100 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ?  500 : direction === 'right' ? -200 : 0

        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                typr: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}