import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

// Open the database


export default function App() {
  const db = SQLite.openDatabase('workoutTracker.db');

  db.transaction(tx => {
    tx.executeSql("SELECT name FROM sqlite_master WHERE type='table'", [], (_, { rows }) => {
      const userTables = rows._array
        .map(row => row.name)
        .filter(name => name !== 'sqlite_sequence'); // Exclude system tables
      console.log('User tables:', userTables);
    });
  });

  return (
    <View style={styles.container}>
      <Text>Workout Tracker</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
