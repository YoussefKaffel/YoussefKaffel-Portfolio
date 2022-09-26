import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import { Fab, Link } from "@mui/material";
import React from "react";

export const totopbutton = () => {
    return (
        <div
            style={{
                position: "fixed",
                "z-index": 100,
                bottom: 0,
                right: 0,
                zIndex : "1600"

            }}
        >

            <Link href="#home" underline="none">
                <Fab color="primary" aria-label="add" style={{margin:"20px",backgroundColor:"#141a2e"}}>
                    <ArrowUpwardRoundedIcon />
                </Fab>
            </Link>

        </div>
    );
};
export default totopbutton;