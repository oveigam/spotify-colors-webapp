import { useLayoutEffect, useRef, useState } from "react";

const useDimensions = () => {
    const ref = useRef()
    const [dimensions, setDimensions] = useState({})

    useLayoutEffect(() => {
        setDimensions(ref.current.getBoundingClientRect().toJSON())
    }, [])

    return [ref, dimensions];
}

export default useDimensions;