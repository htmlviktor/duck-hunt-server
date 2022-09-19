const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
    let timeout;

    const runInterval = () => {
        const timeoutFunction = () => {
            intervalFunction();
            runInterval();
        };

        const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

        timeout = setTimeout(timeoutFunction, delay);
    };

    runInterval();

    return {
        clear() { clearTimeout(timeout) },
    };
};


function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}


export {getRandomNumber, setRandomInterval};