export class TestHelper {
    static hasValue = (val) => {
        return (typeof(val) !== 'undefined' && val !== null && val !== '' && val !== 0)
    }

    static isNothing = (val) => {
        return (
            typeof(val) === 'undefined' || 
            val === null || 
            (typeof(val) == 'string' && val.trim().length == 0) || 
            val === 0 || 
            ( typeof(val) === 'object' && Object.entries(val).length === 0) || 
            (Array.isArray(val) && val.length === 0)
        )
    }

    static isNotNullOrUndefined = (prop) => {
        return typeof(prop) !== 'undefined' && prop !== null
    }
}