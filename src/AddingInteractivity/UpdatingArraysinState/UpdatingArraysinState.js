import { useState } from 'react';

let nextId = 3;
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(
      initialList
    );

    function handleToggleMyList(artworkId, nextSeen) {
        setMyList(myList.map(artwork => {
            if(artwork.id === artworkId){
                return {...artwork, seen : nextSeen};
            } else {
                return artwork;
            }
        }));
    }

    function handleToggleYoutList(artworkId, nextSeen) {
        setYourList(yourList.map(artwork => {
            if(artwork.id === artworkId) {
                return {...artwork, seen : nextSeen}; //배열전개구문
            } else {
                return artwork;
            }
        }));
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList} />
            <h2>Your list of art to see:</h2>
            <ItemList
                artworks={yourList}
                onToggle={handleToggleYoutList} />
        </>
    );
}

function ItemList({ artworks, onToggle }) {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}

let nextIdnew = 3;

const initialArtistsNew = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
];


export function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(
        initialArtistsNew
    );


    function handleClick() {
        const insertAt = 1;
        const nextArtists = [
            ...artists.slice(0, insertAt),
            {id : nextIdnew++, name : name},
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName('');
    }

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
                Insert
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}


let initialCounters = [
    0, 0, 0
];

export function CounterList() {
    const [counters, setCounters] = useState(
      initialCounters
    );

    function handleIncrementClick(index) {
        const nextCounters = counters.map((c,i) =>{
            if(i === index) {
                return c+1;
            } else {
                return c;
            }
        });
        setCounters(nextCounters);
    }


    return (
        <ul>
            {counters.map((counter, i) => (
                <li key={i}>
                    {counter}
                    <button onClick={() => {
                        handleIncrementClick(i);
                    }}>+1</button>
                </li>
            ))}
        </ul>
    );
}





let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
];

export function ShapeEditor() {
    const [shapes, setShapes] = useState(
      initialShapes
    );

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if(shape.type === 'square') {
                return shape;
            } else {
                return {
                    ...shape,
                    y : shape.y + 50
                }
            }
        })

        setShapes(nextShapes);
    }

    return (
        <>
            <button onClick={handleClick}>
                Move circles down!
            </button>
            {shapes.map(shape => (
                <div style={{
                    background: 'purple',
                    position: 'absolute',
                    left: shape.x,
                    top: shape.y,
                    borderRadius:
                        shape.type === 'circle'
                            ? '50%' : '',
                    width: 20,
                    height: 20,
                }} />
            ))}
        </>
    );
}






let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
];

export function ListEx2() {
    const [artists, setArtists] = useState(
        initialArtists
    );

    return (
      <>
        <h1>Inspring sculptors : </h1>
        <ul>
            {artists.map(artist => (
                <li key={artist.id}>
                    {artist.name}{' '}
                    <button onClick={() => {
                        setArtists(
                            artists.filter(a =>
                            a.id !== artist.id
                            )
                        );
                    }}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
      </>
    );
}


let nextIdEx = 0;

export function ListEx() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return(
        <>
            <h1>Inspiring sculptors : </h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setName('');
                setArtists([
                    ...artists,
                    { id: nextIdEx++, name : name}
                ])
                /*artists.push({
                   id: nextId++,
                   name: name,
                });*/
            }}>Add</button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}