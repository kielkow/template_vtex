module.exports = async (milliseconds) => {
   
    const date = Date.now();   
    let currentDate = null;
    
    do {
        currentDate = Date.now();

    } while (currentDate - date < milliseconds);

};