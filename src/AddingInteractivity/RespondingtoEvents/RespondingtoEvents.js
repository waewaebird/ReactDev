export default function Signup() {
    return (
        <form onSubmit={e =>{
            e.preventDefault();
            alert('Submitting!')
        }}>
            <input/>
            <button>Send</button>
        </form>
    )
}

function Button({onClick, children}) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}
export function Toolbar() {
    return (
        <div onClick={() => {
            alert('You clicked on the toolbar!');
        }}>
            <Button onClick={() => alert('Play!')}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Upload')}>
                Upload Image
            </Button>
        </div>
    );
}



/*
export default function App() {
    return (
        <Toolbar
            onPlayMovie={() => alert('Playing!')}
            onUploadImage={() => alert('Uploading!')}
        />
    )
}

function Toolbar({onPlayMovie, onUploadImage}) {
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Playing!
            </Button>

            <Button onClick={onUploadImage}>
                Uploading!
            </Button>
        </div>
    );
}

function Button({onClick, children}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

function Button({ onSmash, children }) {
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    );
}

export default function App() {
    return (
      <div>
          <Button onSmash={() => alert('Playing!')}>
              Play Movie
          </Button>
          <Button onSmash={() => alert('Uploading!')}>
                Upload Image
          </Button>
      </div>
    );
}


function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({movieName}) {
    function handlePalyClick() {
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button onClick={handlePalyClick} >
            Play "{movieName}"
        </Button>
    )
}

function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    )
}

export default function Toolbar() {
    return (
        <div>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
    )
}



function AlertButton({ message, children }) {
    return(
      <button onClick={() => alert(message)}>
          {children}
      </button>
    );
}

export default function Toolbar() {
    return (
        <div>
            <AlertButton message="Playng!">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>
        </div>
    )
}

export function Button() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick} >
            Click me
        </button>
    )
}*/
