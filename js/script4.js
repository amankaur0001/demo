const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerHTML = 0;
    const updateCounter = () => {
        const targetCounter = +counter.getAttribute('data-target');
        console.log(targetCounter)
        const startingCounter = Number(counter.innerHTML);
        const incr = targetCounter/100;
        if(startingCounter<targetCounter){
            counter.innerHTML = `${Math.round(startingCounter + incr)}`;
            setTimeout(updateCounter,20);
        }else(
            counter.innerHTML = targetCounter
        )
    }
    updateCounter();
})
