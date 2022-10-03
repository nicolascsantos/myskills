import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function SkillCard({skill}) {
  if (skill === '') {
    throw new Error('Coloque um valor válido');
  }

  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}> {skill} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
});
