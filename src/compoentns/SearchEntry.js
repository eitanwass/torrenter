import React from 'react';
import PropTypes from 'prop-types';

import WebTorrent from 'webtorrent-hybrid';
import {getDate, formatSize, getMagnetLink} from '../Utils';

import '../styles/SearchEntry.css';

const showFiles = (info_hash, name) => {
    if (!WebTorrent.WEBRTC_SUPPORT){
        console.warn('WEBRTC is not supported in your browser!');
        alert('Your broswer does not support WEBRTC (which is used to download torrents in the browser).');
        return;
    }

    let torrent_link = getMagnetLink(info_hash, name);
    const client = new WebTorrent();

    client.on('error', err => {
        console.warn('[+] Webtorrent error: ' + err.message);
    });

    client.add(torrent_link, (torrent) => {
        let torrentFiles = torrent.files;

        const tab = window.open('about:blank', '_blank');
        const newTabBody = tab.document.body;
        const assumed_movie = torrentFiles.sort((f0, f1) => f1.length - f0.length)[0];
        assumed_movie.appendTo(newTabBody);
        tab.document.close();
    });
};

const SearchEntry = ({name, id, seeders, leechers, added, size, num_files, info_hash, username, status}) => {
    return (
        <div className={`search-entry ${status}`}>
            <p className={'name'}> {name} </p>

            <div className={'vertical-line'}/>

            <div className={'added-time'}>
                {getDate(added)}
            </div>

            <div className={'vertical-line'}/>

            <div className={'seeders-leechers-row'}>
                <p>{seeders}</p>
                <p>/</p>
                <p>{leechers}</p>
            </div>

            <div className={'vertical-line'}/>
            
            <div className={'size'}>
                <p>{formatSize(parseInt(size))}</p>
            </div>

            <div className={'vertical-line'}/>

            <div className={'magnet'}>
                <a href={getMagnetLink(info_hash, name)}>
                    <img src={process.env.PUBLIC_URL + '/icon-magnet.gif'} alt={'magnet'}/>
                </a>
                <i className={'fas fa-film'} onClick={() => showFiles(info_hash, name)}></i>
            </div>
        </div>
    );
};

SearchEntry.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    seeders: PropTypes.string.isRequired,
    leechers: PropTypes.string.isRequired,
    added: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    num_files: PropTypes.string.isRequired,
    info_hash: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}

export default SearchEntry;
