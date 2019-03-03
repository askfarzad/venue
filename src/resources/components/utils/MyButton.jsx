import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../images/icons/ticket.png';

const MyButton = (props) => {
    return (
        <div>
            <Button
                color="secondary"
                variant="contained"
                href="http://google.com"
                target="_blank">
                <img
                    src={TicketIcon}
                    className="iconImage"
                    alt="icon_button"
                />
                {props.text}
            </Button>
        </div>
    );
};

export default MyButton;
