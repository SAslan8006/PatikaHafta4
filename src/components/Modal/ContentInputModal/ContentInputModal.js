import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './ContentInputModal.style';
import Button from '../../Button';
import Modal from 'react-native-modal';


const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = React.useState(null);

  function handleSend(){
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
  }
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection='down'
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
         <TextInput placeholder="Yazabilirsiniz çekinme..." onChangeText={setText} multiline/>
        </View>
        <Button text="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
