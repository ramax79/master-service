import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ctaColor, GS} from '../const/GLOBALSTYLE';
const ButtonText = ({name}) => {
  return (
    <TouchableOpacity>
      <Text style={[GS.Subtitle2, {color: ctaColor, textAlign: 'center'}]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonText;
