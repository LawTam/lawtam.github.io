import React, {useEffect, useRef} from 'react';

/* Credit to Mat Lipe - May 13th, 2019
https://stackoverflow.com/a/56118306
*/

const ReactComment = ( props ) => {
    const el = useRef();
    useEffect( () => {
        el.current.outerHTML = `<!-- ${props.text} -->`;
    }, [] );
    return (
        <div ref={el}/>
    );
};

export default ReactComment;