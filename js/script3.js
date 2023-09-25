const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerHTML = 0;
    const updateCounter = () => {
        const targetCounter = +counter.getAttribute('data-target');
        const startingcount = Number(counter.innerHTML);
        const incr = targetCounter /100;

        if(startingcount<targetCounter){
            counter.innerHTML = `${Math.round(startingcount + incr)}`;
            setTimeout(updateCounter, 20)
        }else{
            counter.innerHTML = targetCounter;
        }
        console.log(targetCounter)
    }
    updateCounter();
})