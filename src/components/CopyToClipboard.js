import {React , useState} from 'react';
import {Button, Tooltip, ClickAwayListener} from '@material-ui/core';
import PropTypes from 'prop-types';
import {useCopyToClipboard} from 'react-use'
import FileCopyIcon from '@material-ui/icons/FileCopy';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        marginRight:theme.spacing(1),
    },

}));
const STATUS_COPY = {
    COPY:"copy",
    COPIED:"copied"
};
const STATUS_COPY_TEXT = {
    [STATUS_COPY.COPY]:"Copy",
    [STATUS_COPY.COPIED]:"Copied!",
};


export const CopyToClipboard = ({text}) => {
    const [stateCopy, setStateCopy] = useState(STATUS_COPY.COPY);
    const [, copyToClipboard] = useCopyToClipboard();
    const classes = useStyles();

    const handleOnClick = () =>{
        copyToClipboard(text);
        setStateCopy(STATUS_COPY.COPIED)
    };
    const handleClickAway = () =>{
        setStateCopy(STATUS_COPY.COPY)
    };
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Tooltip title={STATUS_COPY_TEXT[stateCopy]} arrow onClick={handleOnClick} >
                <Button>
                    <FileCopyIcon fontSize="small" className={classes.icon}/>
                    {text}
                    </Button>
            </Tooltip>
        </ClickAwayListener>
    );
};

CopyToClipboard.propTypes = {
    text: PropTypes.string.isRequired
};