import { StyleSheet } from 'react-native';
import { spacing } from '~/configs';

export default StyleSheet.create({
    container: { 
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center', 
         borderColor:'gray',
         borderRadius:8,
        },
    body_container: { 
        width: '70%', marginVertical: spacing.xs, 
    },
    text_input: { 
        margin: spacing.xxs 
    },
    
});
