import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
    },

    criptoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#000000',
        borderWidth: 1,
    },

    newsBox: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#000000',
        borderWidth: 1,
    },
    titleNew: {
        flex: 0.6,
    },
    button: {
        height: 35,
        flexDirection: 'column',
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 120,
        backgroundColor: 'grey',
        borderRadius: 20,
    },

    iconBox: {
        width: 40,
        marginRight: 10,
        height: 40,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        borderColor: '#000000',
        borderWidth: 1,
    },
});
