export const log = (...args) => console.log(...args);
export const logError = (...args) => console.error(...args);
export const renderIf = (test, component) => test ? component : undefined;
export const classToggler = (options) => Object.keys(options).filter(key => !!options[key]).join(' ');
export const imgObj = {
    bb: require("./../components/assetts/bb2.webp"),
    c: require("./../components/assetts/c.webp"),
    chow: require("./../components/assetts/chow2.webp"),
    si: require("./../components/assetts/si.webp"),
    tf: require("./../components/assetts/tf.webp"),
    weather: require("./../components/assetts/weather.webp"),
};
export const smallImgObj = {
    bb: require("./../components/assetts/bb2-small.webp"),
    c: require("./../components/assetts/c-small.webp"),
    chow: require("./../components/assetts/chow2-small.webp"),
    si: require("./../components/assetts/si-small.webp"),
    tf: require("./../components/assetts/tf-small.webp"),
    weather: require("./../components/assetts/weather-small.webp")
};