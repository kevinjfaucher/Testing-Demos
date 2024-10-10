

function getProperty(obj, key){
    return obj[key];
}


function updateProperty(obj, key, value){
    obj[key] = value;
    return obj;

}


function deleteProperty(obj, key) {
    delete obj[key];
    return obj;
}

module.exports = { getProperty, updateProperty, deleteProperty};
