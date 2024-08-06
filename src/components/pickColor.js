import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export const PickColor = () => {
    const [color, setColor] = useState("#aabbcc");
    const [msg, setMsg] = useState(false)

    const handleClick = () => {
        navigator.clipboard.writeText(color);
        setMsg(true)

        setTimeout(() => {
            setMsg(false)
        }, 800);
    }

    return (
        <div className="container d-flex" style={{ justifyContent: "center" }}>
            <HexColorPicker color={color} onChange={setColor} />
            <button type="button" className="btn btn-primary position-relative" onClick={handleClick}>
                {color}
                {msg ? <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                    Hex Color Copied
                    <span className="visually-hidden">unread messages</span>
                </span> : ""}
            </button>
        </div>
    );
};
