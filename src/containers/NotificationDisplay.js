import React, { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { connect } from 'formik';

function NotificationDisplay(props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);

    }, [props.message])

    return (
        <div>
            <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)}>
                <Alert onClose={() => { setOpen(false); }} severity="error">
                    {props.message}
                </Alert>
            </Snackbar>
        </div>
    )
}
const mapStateToProps = state => ({
    message: state.notification.message
});

export default connect(mapStateToProps)(NotificationDisplay);