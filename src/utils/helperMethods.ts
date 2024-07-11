import CustomWorld from "../support/world";

function getCurrentTimestamp() {
    const startTime = Date.now();
    return new Date(startTime).toISOString();
}

export {
    getCurrentTimestamp
};
