document.addEventListener("DOMContentLoaded", () => {
    const syncPointer = (e) => {
        const pointerX = e.clientX;
        const pointerY = e.clientY;
        const xp = (pointerX / window.innerWidth).toFixed(2);
        const yp = (pointerY / window.innerHeight).toFixed(2);

        document.documentElement.style.setProperty('--x', pointerX.toFixed(2));
        document.documentElement.style.setProperty('--xp', xp);
        document.documentElement.style.setProperty('--y', pointerY.toFixed(2));
        document.documentElement.style.setProperty('--yp', yp);
    };

    document.body.addEventListener('pointermove', syncPointer);
});
