import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('workoutTracker.db');

db.transaction(tx => {
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS workouts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, duration INTEGER);',
        [],
        () => console.log('Table created successfully'),
        (_, error) => console.log('Error creating table', error)
    );
});

console.log(db)