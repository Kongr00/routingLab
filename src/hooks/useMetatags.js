import {useEffect} from "react";

export function useMetatags(title, description) {

    useEffect(() => {
        document.title = title;
        document.getElementsByTagName("META")[1].content=description;
    }, [])

}