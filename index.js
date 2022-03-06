'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection.
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to return the unchanged value of a given parameter
 * passed to the function.
 * 
 * @param {Number, String, Boolean, Object, etc} value: The value that will be 
 * returned, unaltered.
 */
 function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to take in a paramater and return its data type as a string.
 * 
 * @param {Number, String, Boolean, Object, etc} value: the given value whose 
 * data type will be returned.
 */
function typeOf(value) {
    if (Array.isArray(value)) {
        return "array";
    }
    if (value === null) {
        return "null";
    }
    return typeof value;
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to take in an array and a number, and return the first 
 * <number> of elements in that array.
 * 
 * @param {Array} array: The array whose first elements will be returned.
 * @param {Number} number: The number of elements that will be returned from
 * the given array.
 */
function first(array, number) {
    if (!Array.isArray(array)) {
        return [];
    }
    if (!number || number === NaN) {
        return array[0];
    } 
    if (number < 0) {
        return [];
    }
    if (number > array.length) {
        return array;
    }
    var newArr = array.slice(0, array.length - 1);
    return newArr;
    
}
module.exports.first = first;

/**
 * last: Designed to take in an array and a number, and return the last 
 * <number> of elements in that array.
 * 
 * @param {Array} array: The array whose last elements will be returned
 * @param {Number} number: The number of elements that will be returned
 * from the given array.
 */
function last(array, number) {
    if (!Array.isArray(array)) {
        return [];
    }
    if (!number || number === NaN) {
        return array[array.length - 1];
    }
    if (number < 0) {
        return [];
    }
    if (number > array.length) {
        return array;
    }
    var newArr = array.slice(array.length);
    return array.slice(1, array.length);
}
module.exports.last = last;

/**
 * indexOf: Designed to take in an array and a value, and return the given
 * index of that value if it is one of the array's elements.
 * 
 * @param {Array} array: The array that will be looped through in search
 * of the given value.
 * @param {Number, String, Boolean, Array, Object, etc} value: 
 * The value that will be searched for in the array.
 */
function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    } return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to return a Boolean value of true or false, depending
 * on whether or not the given array contains the given value.
 * 
 * @param {Array} array: The array that will be looped through, in search of 
 * the given value.
 * @param {Number, String, Boolean, Object, Array, etc} value: The element that
 * will be searched for in the given array.
 */
function contains(array, value) {
    for (var i = 0; i < array.length; i++) {
        return array.includes(value) ? true : false;
    }
}
module.exports.contains = contains;

/**
 * unique: Designed to take in an array, and return a new array with any
 * duplicate elements removed.
 * 
 * @param {Array} array: The given array, which will be returned as a new
 * array without duplicates.
 */
function unique(array) {
    //create new array to store result
    var newArr = [];
    var index = [];
    
    //loop through array
    for (var i = 0; i < array.length; i++) {
        index.push(_.indexOf(array, array[i])) 
    
        if(index.includes(i)) {
             newArr.push(array[i]);
        }
     
    }
     return newArr;
}   
module.exports.unique = unique;

/**
 * filter: Designed to take in an array and a function, where the function parameter
 * will return a boolean value on each of the elements in the array. Filter returns 
 * a new array comprised of the elements that return true.
 * 
 * @param {Array} array: The given array, whose elements each pass through the function
 * parameter.
 * @param {function} action: The function param that takes in each element of the array
 * and returns a boolean value of either true or false.
 */
function filter(array, action) {
    var newArr = [];
    var result = false;
    for (var i = 0; i < array.length; i++) {
     if (action(array[i], i, array)) {
             newArr.push(array[i]);
        }
    } return newArr;
}  
module.exports.filter = filter;

/**
 * reject: Designed to take in an array and a function, where the function parameter
 * will return a boolean value on each of the elements in the array. Reject returns 
 * a new array comprised of the elements that return false.
 * 
 * @param {Array} array: The given array, whose elements each pass through the function
 * parameter.
 * @param {Function} action: The function param that takes in each element of the array
 * and returns a boolean value of either true or false.
 */
function reject(array, action) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) { 
        if (!action(array[i], i, array))  {
           
                newArr.push(array[i]);
            }
        }
    return newArr;
}
module.exports.reject = reject;

/**
 * partition: Designed to take in an array and a function, and return a new array,
 * consisting of two sub-arrays: one that contains falsey elements from the array
 * parameter, and one that contains truthy elements from the array parameter.
 * 
 * @param {Array} array: The given array, whose elements are passed through the function
 * parameter.
 * @param {Function} action: The function param that takes in each element of the given
 * array and returns a boolean value of either true or false.
 */
function partition(array, action) {
   
    var truthyArr = [];
    var falseyArr = [];
    
    for (var i = 0; i < array.length; i++) {
       if (action(array[i], i, array) === true) {
            truthyArr.push(array[i]);
        }
        else {
            falseyArr.push(array[i]);
            }
        }
    return [truthyArr, falseyArr];
}
module.exports.partition = partition;

/**
 * map: Designed to take in a collection, pass through each element
 * in the collection, and return the values in a new array.
 * 
 * @param {Array, Object} collection: The object or array that will be 
 * looped through.
 * @param {Function} action: The function through which each element of
 * the given collection is passed through.
 */
function map(collection, action) {
    let array = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
             array.push(action(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            array.push(action(collection[key], key, collection));      
        }
    }
    return array;
}
module.exports.map = map;

/**
 * pluck: Designed to take in an array of objects and return the 
 * values of the object's properties in a new array, using the previously
 * created map function.
 * 
 * @param {Array} array: An array populated with objects, through which
 * the function parameter will pass.
 * @param {Object key} property: The value that will be returned from the 
 * array's object elements, after they have been passed through the map function.
 */
function pluck(array, property) {
    
    var plucked = _.map(array, function(value) {
         return value[property];
    })
    return plucked;
}
module.exports.pluck = pluck;

/**
 * every: Designed to take in a collection and call a function on every element
 * in the given collection, and return false if any elements in the given collection 
 * have falsey values, or return true if there are no falsey values in the collection.
 * 
 * @param {Array, Object} collection: The collection that will be looped through
 * in order to find truthy and/or falsey values.
 * @param {Function} action: The function that will be passed on each element in
 * the given collection.
 */
function every(collection, action) {
    //is a function being passed
    if (!action) {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) {
                    return false;
                }
            }
        } else {
            for (let key in collection) {
                if (!collection[key]) {
                    return false;
                }
            }
        }
    } else {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (!action(collection[i], i, collection)) {
                    return false;
                }
            }
        } else {
            for (let key in collection) {
                if (!action(collection[key], key, collection)) {
                    return false;
                }
            }
        }
        
    }
    return true;
};
module.exports.every = every;

/**
 * some: Designed to take in a collection and call a function on every 
 * element in the given collection, and return true if any elements 
 * in the given collection have truthy values, or return false if 
 * there are no truthy values in the collection.
 *
 * @param  {Array, Object} collection: The collection that will be 
 * looped through in order to find truthy and/or falsey values.
 * @param {Function} action: The function that will be passed on each 
 * element in the given collection.
 */

function some(collection, action) {
    if (!action) {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i]) {
                    return true;
                }
            }

        } else {
            for (let key in collection) {
                if (collection[key]) {
                    return true;
                }
            }
        }
    } else {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (action(collection[i], i, collection)) {
                    return true;
                }
            }
        } else {
            for (let key in collection) {
                if (action(collection[key], key, collection)) {
                    return true;
                }
            }
        } 
    } 
return false;
};
module.exports.some = some;

/**
 * reduce: Designed to take in a function and an array, and call the
 * function on each element in the array, iterating through and finally
 * returning the last value of the function call at the end of the
 * iteration.
 * 
 * @param {Array} array: The array that will be iterated through.
 * @param {Function} action: The function that will be called on each
 * element in the given array.
 * @param {Number} seed: 
 */
function reduce(array, action, seed) {
    let accumulator;
    if (seed !== undefined) {
        accumulator = seed;
        for (var i = 0; i < array.length; i++) {
            accumulator = action(accumulator, array[i], i, array);
        }
    } else {
      accumulator = array[0];
        for (var i = 1; i < array.length; i++) {
            accumulator = action(accumulator, array[i], i, array);
            }
        }
    return accumulator;
};
module.exports.reduce = reduce;

/**
 * extend: Designed to take in an undetermined amount of objects,
 * and copy the properties into the first object from any number of
 * following objects.
 * 
 * @param {Objects} undetermined: No specific parameters are passed
 * through this function, because we want it to be able to take any
 * number of objects in as parameters. Instead we use the *arguments*
 * keyword as a placeholder within the function for an infinite 
 * number of object parameters.
 */
function extend() {
    for (let i = 0; i < arguments.length; i++) {
        Object.assign(arguments[0], arguments[i]);
    }
    return arguments[0];
};
module.exports.extend = extend;