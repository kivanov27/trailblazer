import { useState } from "react";

const Xp = () => {
    const [level, setLevel] = useState<number>(0);
    const [xp, setXp] = useState<number>(0);

    return (
        <div className="xp-container">
            <h2 className="xp-level">Level: {level}</h2>
            <div className="xp-bar"></div>
        </div>
    );
};

export default Xp;
