import {useRef, useState, useEffect, useCallback} from "react";

// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue);

    const toggleValue = () => {
        setValue(!value)
    }

    return [value, toggleValue] as const
}

// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable
const usePrevious = <T,>(value: T): T | undefined => {
    const currentValue = useRef<T>(value);
    const previousValue = useRef<T | undefined>();

    if (currentValue.current !== value) {
        previousValue.current = currentValue.current;
        currentValue.current = value;
    }

    return previousValue.current;
}

// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage
const useLocalStorage = <T,>(key: string, defaultValue: T) => {
    return useStorage(key, defaultValue, window.localStorage);
}
const useStorage = <T,>(key: string, defaultValue: T, storageObject: Storage) => {
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof defaultValue === "function") {
            return defaultValue();
        } else {
            return defaultValue;
        }
    });

    useEffect(() => {
        if (value === undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value));
    }, [key, value, storageObject]);

    const remove = useCallback(() => {
        setValue(undefined);
    }, []);

    return [value, setValue, remove];
}

// Export
export {
    useToggle,
    usePrevious,
    useLocalStorage
}
