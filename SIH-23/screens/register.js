import React from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';

const Reg = () => {
  return (
    <View style={{ width: 96, height: 96, position: 'relative', backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2 }}>
      <TextInput
        style={{ width: 80, height: 40, left: 28, top: 155.60, position: 'absolute', backgroundColor: 'transparent', borderRadius: 10, borderWidth: 1, borderColor: '#ddd', fontSize: 20, textAlign: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2 }}
      />
      <View style={{ width: 80, height: 80, left: 301.81, top: 144, position: 'absolute' }}>
        <View style={{ width: 80, height: 80, position: 'absolute', backgroundColor: '#ddd', borderRadius: 40, borderWidth: 1, borderColor: '#ddd' }} />
        <Image style={{ width: 36, height: 47, left: 15.04, top: 8.23, position: 'absolute' }} source={{ uri: 'https://drive.google.com/uc?export=view&id=1kuktAXQXulyWwHkcC64Per1zxp22PNvB' }} />
      </View>
      <View style={{ width: 120, height: 40, left: 42.04, top: 130, position: 'absolute' }}>
        <View style={{ width: 120, height: 40, left: 5.19, top: 0, position: 'absolute', backgroundColor: 'white' }} />
        <Text style={{ width: 120, height: 40, fontSize: 16, textAlign: 'center', color: 'black', fontWeight: 'bold', top: 13 }}>Company name</Text>
      </View>
      <View style={{ width: 96, height: 96, position: 'relative', backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2 }}>
      <TextInput
        style={{ width: 80, height: 40, left: 28, top: 155.60, position: 'absolute', backgroundColor: 'transparent', borderRadius: 10, borderWidth: 1, borderColor: '#ddd', fontSize: 20, textAlign: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2 }}
      />
      <TextInput
        style={{ width: 80, height: 40, left: 28, top: 347, position: 'absolute', backgroundColor: 'transparent', borderRadius: 10, borderWidth: 1, borderColor: '#ddd', fontSize: 20, textAlign: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2 }}
      />
      <TextInput
        style={{ width: 80, height: 40, left: 28, top: 455, position: 'absolute', backgroundColor: 'transparent', borderRadius: 10, borderWidth: 1, borderColor: '#ddd', fontSize: 20, textAlign: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2 }}
      />
      <TextInput
        style={{ width: 80, height: 40, left: 28, top: 245, position: 'absolute', backgroundColor: 'transparent', borderRadius: 10, borderWidth: 1, borderColor: '#ddd', fontSize: 20, textAlign: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2 }}
      />
    </View>
      <TouchableOpacity style={{ width: 96, height: 40, left: 98, top: 44, position: 'absolute' }}>
        <Text style={{ width: 96, height: 40, fontSize: 24, textAlign: 'center', color: 'blue', fontWeight: 'bold' }}>REGISTRATION</Text>
        <View style={{ width: 65, height: 1, backgroundColor: 'green', borderRadius: 2, left: 65, top: 45, position: 'absolute' }} />
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 96, height: 40, left: 103, top: 578, position: 'absolute' }}>
        <View style={{ width: 96, height: 40, position: 'absolute', backgroundColor: 'blue', borderRadius: 10, left: 0, top: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2 }}>
          <Text style={{ width: 72, height: 32, fontSize: 20, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Create</Text>
        </View>
        <Image style={{ width: 38, height: 44, left: 133, top: 0, position: 'absolute' }} source={{ uri: 'https://drive.google.com/uc?export=view&id=1BCVrpmCbXknfuudvdzDw01yYQlpOsAqL' }} />
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 160, height: 40, left: 39, top: 651, position: 'absolute' }}>
        <Text style={{ width: 160, height: 40, fontSize: 16, textAlign: 'center', color: '#888', fontWeight: 'bold' }}>Already a user..?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 96, height: 40, left: 107, top: 696, position: 'absolute' }}>
        <View style={{ width: 96, height: 40, position: 'absolute', backgroundColor: 'green', borderRadius: 10, left: 0, top: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2 }}>
          <Text style={{ width: 80, height: 36, fontSize: 24, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Login</Text>
        </View>
        <Image style={{ width: 38, height: 44, left: 139, top: 4, position: 'absolute' }} source={{ uri: 'https://drive.google.com/uc?export=view&id=1KAkPqpibrFzOPjMs59A9KUaJEd5RFWeB' }} />
      </TouchableOpacity>
    </View>
  );
};

export default Reg;