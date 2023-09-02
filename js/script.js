function handleInput(inputValue) {
    if (typeof inputValue === 'number') {
        if (inputValue > 7) return 'Hello';
        return 'What should I print in this case?';
    }

    if (typeof inputValue === 'string') {
        if (inputValue === 'John') return 'Hello, John';
        return 'There is no such name';
    }

    if (Array.isArray(inputValue))
        return inputValue.filter((el) => (el % 3 === 0));
}