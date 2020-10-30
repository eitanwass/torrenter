export const getDate = (date) => {
    let dateObj = new Date(date * 1000);

    const m = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');

    const d = (dateObj.getUTCDate()).toString().padStart(2, '0');
    
    return dateObj.getUTCFullYear() + '-' + m + '-' + d;
};

export const formatSize = (size, explicit) => {
    let explicitAddition = '';
    let ending = 'B';
    let pow = 0;
    if (explicit)
        explicitAddition = '(' + size + ' Bytes)';

    if (size >= Math.pow(2, 50))
    {
        pow = 50;
        ending = 'PiB';
    }
    else if (size >= Math.pow(2, 40))
    {
        pow = 40;
        ending = 'TiB';
    }
    else if (size >= Math.pow(2, 30))
    {
        pow = 30;
        ending = 'GiB';
    }
    else if (size >= Math.pow(2, 20))
    {
        pow = 20;
        ending = 'MiB';
    }
    else if (size >= Math.pow(2, 10))
    {
        pow = 10;
        ending = 'KiB';
    }

    return roundToDigits(size / Math.pow(2, pow), 2) + ending + explicitAddition;
}

export const getMagnetLink = (infoHash, name) => {
    return `magnet:?xt=urn:btih:${infoHash}&dn=${encodeURIComponent(name)}${getTrackers()}`;
};

const roundToDigits = (num, digits) => {
    return Math.round((num + Number.EPSILON) * Math.pow(10, digits)) / Math.pow(10, digits);
};

const getTrackers = () => {
    let tr = '&tr=' + encodeURIComponent('udp://tracker.coppersurfer.tk:6969/announce');
        tr += '&tr=' + encodeURIComponent('udp://9.rarbg.me:2850/announce');
        tr += '&tr=' + encodeURIComponent('udp://9.rarbg.to:2920/announce');
        tr += '&tr=' + encodeURIComponent('udp://tracker.opentrackr.org:1337');
        tr += '&tr=' + encodeURIComponent('udp://tracker.leechers-paradise.org:6969/announce');
        return tr;
}
