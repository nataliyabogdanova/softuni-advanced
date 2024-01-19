function addAndRemove(commands) {
    let n = 1;
    let result = [];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == "add") {
            result.push(n);
            n++;
        } else if (commands[i] == "remove") {
            result.pop();
            n++;
        }
    }
    return result.length ? result.join("\n") : "Empty";
}
console.log(addAndRemove(['add',

    'add',

    'add',

    'add']))