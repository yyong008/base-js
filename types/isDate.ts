import _toString from '../utils/toString';

const isDate = (val) => {
    return _toString.call(val) === '[object Date]';
}