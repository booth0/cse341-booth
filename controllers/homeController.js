export const getName = (req, res) => {
    const name = process.env.NAME;
    res.send(`${name}`);
};