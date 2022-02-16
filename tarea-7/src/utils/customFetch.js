let data_retrieved = true;

const customFetch =  (timeOut, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (data_retrieved) {
            resolve(task);
        } else {
            reject('No data');
        }
    }, timeOut);
    });
}

export default customFetch;