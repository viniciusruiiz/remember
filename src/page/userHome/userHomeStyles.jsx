import { createStyles } from "@material-ui/core";

const styles = (theme) => createStyles({
    root: {
        marginTop: 56 + 20,
        color: "white",
        paddingLeft: 20,
        paddingRight: 20,
    },
    hideCompartilhadas: {
        marginBottom: 20,
        marginTop: 20,
    },
    iconArrow: {
        verticalAlign: "middle",
        marginLeft: 8,
        transition: '0.1s',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
});

export default styles