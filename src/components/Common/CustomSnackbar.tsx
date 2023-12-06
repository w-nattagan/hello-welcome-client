import React from "react";
import { Snackbar, Button } from "@mui/material";

interface CustomSnackbarProps {
    open: boolean;
    message?: string;
    autoHideDuration?: number;
    onClose: () => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
    open,
    message = "Default message",
    autoHideDuration = 3000,
    onClose,
}) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            message={message}
            action={
                <Button color="secondary" size="small" onClick={onClose}>
                    CLOSE
                </Button>
            }
        />
    );
};

export default CustomSnackbar;
