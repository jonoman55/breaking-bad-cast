import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { formatName } from '../../helpers/textHelper';
import hollyImg from '../../img/holly.png'

const CharacterItem = ({ item }) => {
    const [status, setStatus] = useState(false);
    const [lastWords, setLastWords] = useState('');

    useEffect(() => {
        const fetchDeathData = async () => {
            if (item.status === 'Deceased' && item.name !== 'Charles McGill') {

                let name = formatName(item.name);
                if (item.nickname === 'Combo') {
                    name = item.nickname;
                } else if (item.nickname === 'Krazy-8') {
                    name = item.nickname;
                }

                const response = await axios(`https://breakingbadapi.com/api/death?name=${name}`);
                const getLastWords = response.data.map(i => i.last_words);
                setLastWords(getLastWords);
                setStatus(true);
            }
        }
        fetchDeathData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.name === 'Holly White' ? hollyImg : item.img} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.status}
                        </li>
                        {status && (
                            <li>
                                <strong> Last Words:</strong> {lastWords}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CharacterItem;