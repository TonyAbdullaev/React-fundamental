import React, {useEffect, useRef} from 'react';

const UseObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();
    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect( );
        let cb = function(entries, observer) {
            if(entries[0].isIntersecting && canLoad) {
                callback();
            }
            console.log("ksa")
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading])

};

export default UseObserver;